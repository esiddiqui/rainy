
$(document).ready(function(){
    fetchAndShow();
})

function fetchAndShow() {
    console.log("fetchAndShowUrl() called");
    var opts = {
       'active': true, 
       'lastFocusedWindow': true
    };   
    chrome.tabs.query(opts, function (tabs) {
      
      var url = tabs[0].url;
      url = cleanseUrl(url);
      $("#jqDivUrl").text(url);
      var data = getData(url, tabs[0]);


    });
}


function cleanseUrl(url) {
    console.log("cleanseUrl() called")
    if (url === '' || url === undefined)
        return url;
    var index1 = url.indexOf("://");
    if (index1!=-1)
        url = url.substring(index1+3);
    if (url.startsWith("www"))
        url = url.substring(4);
    index1= url.indexOf("/");
    if (index1!=-1)
    url = url.substring(0,index1);
    console.log("anchor: " + url);
     return url;
}

function getData(anchor,tab) {
    console.log("getData() called");
    $("#jqDivData").text("***");
    if ( anchor==''|| anchor==undefined ) {
        return "null url"
    }
    try {
        var serviceUri = "http://99.237.207.142:9001/api/dataItems/search/findByAnchor/?anchor=" + anchor;
        //var serviceUri = "http://localhost:9001/api/dataItems/search/findByAnchor/?anchor=" + anchor;
        $.get(serviceUri, function(data, status) {
            var res='no-data-found';
            if (data._embedded.dataItems.length>0) {
                res=data._embedded.dataItems[0].title;

                chrome.tabs.sendMessage(tab.id, {data: data._embedded.dataItems[0]}, function(response) {
                    //console.log(response.farewell);
                  });

                attachTable("#jqTbl",data._embedded.dataItems[0],"propsTable");
                $("#jqMsg").text("Metadata found");
            } else {
                attachForm("#jqTbl",anchor);
                $("#jqMsg").text("Add metadata for this site...")
            }
        });
   } catch (err) {
       console.err("Error making call to rainy service" + err)
       attachForm("#jqTbl",anchor);
   }
}


function attachForm(selector,anchor) {
    console.log("attachForm() called");
    var initObj = initObject(anchor);
    //add editable table
    var table = getTableFromObject(initObj,"propsTable2",/*editable: */true);
    table.appendTo(selector);
    //add button
    var button = $("<input type='button' value='Add' />");
    button.appendTo(selector);
}

function attachTable(selector, data, tableId) {
    console.log("attachTable() called");
    var table = getTableFromObject(data,tableId,/*editable: */false);
    table.appendTo(selector);
}


/**
 * Create an HTML table for an object and it's embedded objects/arrays
 * 
 * @param {*} data    the data object
 * @param {*} tableId the value for HTML id tables to generate
 * @param {*} editable specify if all the 
 */
function getTableFromObject(data,tableId,editable){
    console.log("getTableFromObject() called");
	var table = $('<table></table>').attr({ id: tableId });
    var tr = [];
    for(var key in data) {
        if (key !== '_links') {
            var row = $('<tr></tr>').attr({ class: ["cls1", "cls2"].join(' ') });
            row.appendTo(table);
            $('<td></td>').text(key).appendTo(row);
            if ( key === 'meta') {
                var cell = $('<td></td>').attr({ class: key});
                cell.appendTo(row);
                var innerTable = getTableFromArray(data['meta'],tableId+'_meta',editable);
                innerTable.appendTo(cell);
            } else {
                if (editable) {
                    var cell = $('<td></td>').text("").appendTo(row);
                    var disabled= (data[key] && data[key]!=='')?"disabled='disabled'":""; 
                    var input = $("<input type='text' id='input_" + key + "' value='" + data[key] +"' " + disabled + "/>").appendTo(cell);  
                   
                } else {
                    $('<td></td>').text(data[key]).appendTo(row);
                }
            }
        }
     }
    return table;
}


/**
 * Create an HTML table for an array or key/value
 * pairs.
 * 
 * @param {*} arr  the array to use as soure
 * @param {*} tableId the html ID attribute
 * @param {*} editable specify if values cells are editable
 */
function getTableFromArray(arr,tableId,editable){
    console.log("getTableFromArray() called");
    var table = $('<table></table>').attr({ 
        id: tableId 
    });
    if (arr && arr instanceof Array && arr.length>=0) {
        var tr = [];
        for(i =0; i<arr.length; i++) {
            var obj = arr[i];
            var row = $('<tr></tr>').attr({ 
                class: ["cls1", "cls2"].join(' ') 
            });
            row.appendTo(table);

            if (editable) {
                var cell = $('<td></td>').text("").appendTo(row);
                var input = $("<input type='text' id='inputk_" + obj.key + "' value='" + obj.key +"' />").appendTo(cell);  
            } else {
                $('<td></td>').text(obj.key).appendTo(row); /* row of titles */
            }

            if (editable) {
                var cell = $('<td></td>').text("").appendTo(row);
                var input = $("<input type='text' id='inputv_" + obj.key + "' value='" + obj.value +"' />").appendTo(cell);  
            } else {
                $('<td></td>').text(obj.value).appendTo(row);
            }
        } 
    }
    return table;  
}



function initObject(anchor) {
    console.log("initObject() called");
    return {
        "anchor": anchor,
        "category": "info",
        "description": "",
        "user": "",
        "email":"",
        "password": "",
        "hint": "",
        "title": "",
        "meta": [
            {   "key": "",
                "value": ""
            },{ "key": "",
                "value": ""
            },{ "key": "",
                "value": ""
            },{ "key": "",
                "value": ""
            }
        ]   
    };
}


// chrome.browserAction.onClicked.addListener(function(tab) {
//     console.log("addListener_onClicked called");
//     chrome.tabs.executeScript({
//       code: 'document.body.style.backgroundColor="red"'
//     });
//   });


//  chrome.tabs.executeScript(null, {code:"document.body.bgColor='red'"});

//chrome.tabs.executeScript(null, {code:"alert('yolo')"});
chrome.tabs.executeScript(null, {file: "form-filler.js"});

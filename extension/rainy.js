


function fetchAndShowUrl() {
    console.log("fetchAndShowUrl() called");
    var opts = {
       'active': true, 
       'lastFocusedWindow': true
    };   
    chrome.tabs.query(opts, function (tabs) {
      var url = tabs[0].url;
      url = cleanseUrl(url);
      $("#jqDivUrl").text(url);
      var data = getData(url);
    });
}

function getData(url) {

    $("#jqDivData").text("sss");
    if (url==''||url==undefined) {
        return "null url"
    }
    console.log("getData() called");
    var url = "http://localhost:9001/api/dataItems/search/findByAnchor/?anchor=" + url;
    $.get(url, function(data, status) {
        var res='no-data-found';
        if (data._embedded.dataItems.length>0) {
            res=data._embedded.dataItems[0].title;
        }
        $("#jqDivData").text(res);
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

     return url;
}

$(document).ready(function(){
    fetchAndShowUrl();
    fetchAndShowData();
})
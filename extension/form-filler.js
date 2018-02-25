//console.log('form-filler.js invoked');
// alert(document.getElementById('login:AccessCard').value);

// document.getElementById('login:AccessCard').value ='asdfasf';
// //$('#login:AccessCard').val("walla!!");


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      //alert('yolo!!' + JSON.stringify(request));
      document.getElementById('Text1').value =request.data.user;
      document.getElementById('Password1').value ='';
      document.getElementById('Text2').value =request.data.meta[0].value;
    
      /*if (request.greeting == "hello")
        sendResponse({farewell: "goodbye"});*/
    });
//SafePopup Function
//Runs on all urls that are matched
function safePopup () {
    //Create our safe popup
    var div = document.createElement("div");
    //This HTML is inserted at the top of the body. 
    div.innerHTML =
      '<div id="popup-safe">\n' +
        '<div id="popup-safe-content">\n' +
          '<p>This website is secure. Click this link to learn more.</p>\n' +
        '</div>\n' + 
      '</div>\n'
    document.body.prepend(div);
    //Fade out after a few seconds
    //Needs to be coded, and css needs an overhaul
  }
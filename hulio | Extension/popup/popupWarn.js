//SafePopup Function
//Runs on all urls that are matched
function warnPopup () {
    //Create our safe popup
    var div = document.createElement("div");
    //This HTML is inserted at the top of the body. 
    div.innerHTML =
      '<div id="popup-warn">\n' +
        '<div id="popup-safe-content">\n' +
        '<h1 id = "title123456">This site might not be secure.</h1>\n' +
          '<p id = "paragraph123456">This website is not part of your current whitelist. Double check the URL to be safe.</p>\n' +
        '</div>\n' + 
      '</div>\n'
    document.body.prepend(div);
    //Fade out after a few seconds
    //Needs to be coded, and css needs an overhaul
  }
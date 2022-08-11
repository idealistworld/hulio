//SafePopup Function
//Runs on all urls that are matched


function moreInfo() {
  var currentUrl = window.location;
  window.open(`chrome-extension://kngpjlplailjgbnldhiphphdbjkjoaii/info/info.html?url=${currentUrl}`, "_blank");
  alert(currentUrl);
}
var hoveringOver = false;

function stayOpen() {
  hoveringOver = true;
}

function close() {
  setTimeout(() => {
    document.getElementById("popup-safe").remove();
  }, 3000)
}

function safePopup() {
  //Create our safe popup
  var div = document.createElement("div");
  //This HTML is inserted at the top of the body. 
  div.innerHTML =
    '<div id="popup-safe">\n' +
    '<div id="popup-safe-content">\n' +
    '<h1 id = "title123456">This Site is Safe</h1>\n' +
    '<p id = "paragraph123456">Click this link to learn more about verification.</p>\n' +
    '<button id="moreInfo">More Info</button>\n' +
    '</div>\n' +
    '</div>\n'
  document.body.prepend(div);
  //Fade out after a few seconds
  //Needs to be coded, and css needs an overhaul
  document.getElementById("popup-safe").addEventListener("mouseover", stayOpen);
  document.getElementById("moreInfo").addEventListener("click", moreInfo);
  document.getElementById("popup-safe").addEventListener("mouseleave", close);
  setTimeout(() => {
    if (hoveringOver === false) {
      document.getElementById("popup-safe").remove();
    }
  }, 3000)
}


//Detect wether the current website is Safe. If not, check if the website is Solana related. If it is Solana related and not in the safe list, warn the user. 

//Get saved settings from Chrome storage
//Initialize global variables
var warningCBox;
var retypingCBox;
var debugCBox;
var safeSitesListStr = '';
var foundSafe = -2;
var ignoreSitesListStr = '';
var foundIgnoreWarnRetype = -2;
var ignoreWarnRetypeListStr = '';
var foundIgnoreWarn = -2;
var ignoreWarnListStr = '';


function removeWww (urlvar) {
  if (urlvar.indexOf("www.") === -1) {
      return urlvar;
  } else {
    return urlvar.substring(4);
  }
}

const url = removeWww(window.location.host);

function updateSettings() {
  chrome.storage.sync.get({
    //Set default results
    warningCBox: true,
    retypingCBox: true,
    debugCBox: false,
    safeSitesListStr: '',
    ignoreSitesListStr: '',
    ignoreWarnRetypeListStr: '',
    ignoreWarnListStr: '',
  }, function(items) {
    window.warningCBox = items.warningCBox;
    window.retypingCBox = items.retypingCBox;
    window.debugCBox = items.debugCBox;
    window.safeSitesListStr = items.safeSitesListStr;
    window.ignoreSitesListStr = items.ignoreSitesListStr;
    window.ignoreWarnRetypeListStr = items.ignoreWarnRetypeListStr;
    window.ignoreWarnListStr = items.ignoreWarnListStr;
    window.foundSafe = window.safeSitesListStr.indexOf(url);
    setTimeout(function () {
      main();
    }, 1500);
  });
}

//Main logic of the program
//Delay 2 seconds to ensure that the website is fully loaded before searching through it
function main() {
  if (foundSafe >= 0) {
    safePopup();
  } else if (foundSafe === -1) {
    if (warningCBox) {
      foundIgnoreWarnRetype = ignoreSitesListStr.indexOf(url);
      if (foundIgnoreWarnRetype === -1) {
        detectSolana(debugCBox);  
      }
    }
  } else {
  }
}

result = updateSettings();
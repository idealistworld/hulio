//Detect wether the current website is Safe. If not, check if the website is Solana related. If it is Solana related and not in the safe list, warn the user. 

//Get saved settings from Chrome storage
//Initialize global variables
var warningCBox;
var retypingCBox;
var debugCBox;
var safeSitesListStr = '';
const url = window.location.host;
var found = -2;

function updateSettings() {
  chrome.storage.sync.get({
    //Set default results
    warningCBox: true,
    retypingCBox: true,
    debugCBox: false,
    safeSitesListStr: '',
  }, function(items) {
    window.warningCBox = items.warningCBox;
    window.retypingCBox = items.retypingCBox;
    window.debugCBox = items.debugCBox;
    window.safeSitesListStr = items.safeSitesListStr;
    window.found = window.safeSitesListStr.indexOf(url);
    setTimeout(function () {
      main();
    }, 1500);
  });
}

//Main logic of the program
//Delay 2 seconds to ensure that the website is fully loaded before searching through it
function main() {
  //If the website is not matched by the regex filter
  if (found === -1) {
    if (warningCBox) {
      detectSolana(debugCBox);  
    }
  } 
  //If the website is matched by the regex filter. 
  else if (found >= 0) {
    safePopup();
  }
}

result = updateSettings();
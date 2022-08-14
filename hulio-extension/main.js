//Detect wether the current website is Safe. If not, check if the website is Solana related. If it is Solana related and not in the safe list, warn the user. 

//Get saved settings from Chrome storage
//Initialize global variables
var warningCBox;
var retypingCBox;
var debugCBox;
var tutorialsCBox;
var SafeDB;
var foundSafe = -1;
var ignoreSitesList;
var foundIgnoreSites = -2;
var ignoreWarnRetypeList;
var foundIgnoreWarn = -2;
var ignoreWarnList;
var tutorialCompleteList;


function removeWww (urlvar) {
  if (urlvar.indexOf("www.") === -1) {
      return urlvar;
  } else {
    return urlvar.substring(4);
  }
}

const url = removeWww(window.location.host);
var rowSafeDB = -1;

function updateSettings() {
  chrome.storage.local.get({
    //Set default results
    warningCBox: true,
    retypingCBox: true,
    debugCBox: false,
    tutorialsCBox: true,
    SafeDB: '',
    ignoreSitesList: [],
    ignoreWarnRetypeList: [],
    ignoreWarnList: [],
    tutorialCompleteList: [],
  }, function(items) {
    window.warningCBox = items.warningCBox;
    window.retypingCBox = items.retypingCBox;
    window.debugCBox = items.debugCBox;
    window.tutorialsCBox = items.tutorialsCBox;
    window.SafeDB = items.SafeDB;
    window.ignoreSitesList = items.ignoreSitesList;
    window.ignoreWarnRetypeList = items.ignoreWarnRetypeList;
    window.ignoreWarnList = items.ignoreWarnList;
    window.tutorialCompleteList = items.tutorialCompleteList;
    setTimeout(function () {
      checkDB(SafeDB, url)
      main();
    }, 1500);
  });
}

function checkDB (_DB, _url) {
  var rowCount = _DB.rowCount;
  for (let i = 0; i < rowCount; i++) { 
    testFound = _DB.rows[i].url.indexOf(url);
    if (testFound >= 0) {
      foundSafe = testFound
      rowSafeDB = i
      break
    } 
  }
}


//Main logic of the program
//Delay 2 seconds to ensure that the website is fully loaded before searching through it
function main() {
  if (foundSafe >= 0) {
    safePopup();
  } else if (foundSafe === -1) {
    if (warningCBox) {
      if (!(checkList (ignoreSitesList, url))) {
        detectSolana(debugCBox);  
      }
    }
  } else {
  }
}

function checkList (lst, match) {
  for (let i = 0; i < lst.length; i++) {
    if (lst[i].indexOf(match) >= 0) {
      return true
    }
  }
  return false
}


result = updateSettings();
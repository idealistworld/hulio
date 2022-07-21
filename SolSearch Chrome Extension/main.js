//Detect wether the current website is Safe. If not, check if the website is Solana related. If it is Solana related and not in the safe list, warn the user. 

//Get saved settings from Chrome storage
//Initialize global variables
var warningCBox;
var retypingCBox;
var debugCBox;

function updateSettings() {
  chrome.storage.sync.get({
    //Set default results
    warningCBox: true,
    retypingCBox: true,
    debugCBox: false,
  }, function(items) {
    window.warningCBox = items.warningCBox;
    window.retypingCBox = items.retypingCBox;
    window.debugCBox = items.debugCBox;
  });
}
updateSettings();


//Set the var url to current url
const url = window.location.href;

//This is the filter for the websites. This should be updated, and automated in the future so links can be added easily. 
const regex = /\/\/(www.)?solend.fi\/|\/\/(www.)?jup.ag\/|\/\/(www.)?orca.so\//gm;

//Use the filter
const found = url.match(regex);



//Main logic of the program
//Delay 2 seconds to ensure that the website is fully loaded before searching through it
setTimeout(function(){
  //If the website is not matched by the regex filter
  if (found === null) {
    if (warningCBox) {
      detectSolana(debugCBox);  
    }
  } 
  //If the website is matched by the regex filter. 
  else {
    safePopup();
  }
}, 2000);
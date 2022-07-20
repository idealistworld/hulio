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


//Detection Algorithm
//Detect if a website is Solana related
//Only runs if url is not matched
function detectSolana() {
  //Scrape all the websites text and make it lowercase.
  var content = document.body.textContent || document.body.innerText;
  var contentLowerCase = content.toLowerCase()
  //Terms
  var hasSolana = contentLowerCase.indexOf("solana")!==-1;
  var hasSol = contentLowerCase.indexOf(" sol ")!==-1;
  var hasConnectWallet = contentLowerCase.indexOf("connect wallet")!==-1;
  var hasLaunchApp = contentLowerCase.indexOf("launch app")!==-1;
  //Apply Weights to Terms
  //Needs to be calculated
  var totalScore = hasSolana + hasSol + hasConnectWallet + hasLaunchApp
  //Debuging
  if (debugCBox) {
    alert("Total score: " + totalScore + "\nSolana: " + hasSolana + "\nSol: " + hasSol + "\nConnect Wallet: " + hasConnectWallet + "\nLaunch App: " + hasLaunchApp)
  }
  //If score is above n, alert user that this is a potentially unsafe solana website. 
  if (totalScore >= 2) {
    warning();
  } 
}


//Warning function, runs on websites that are solana related but unknown
//Only runs if warningCBox is checked
function warning() {
  if (retypingCBox) {
    retyping();
  }
  else {
    //Another placeholder
    alert("Normal warning placeholder")
  }
}


//SafePopup Function
//Runs on all urls that are matched
function safePopup () {
  //Create our safe popup
  var div = document.createElement("div");
  //This HTML is inserted at the top of the body. 
  div.innerHTML =
    '<div class="popupSafe" id="popupSafe-1">\n' +
      '<div class="overlay"></div>\n' +
      '<div class="content">\n' +
        '<p>This website is secure. Click this link to learn more.</p>\n' +
      '</div>\n' + 
    '</div>\n'
  document.body.prepend(div);
  //Fade out after a few seconds
  //Needs to be coded, and css needs an overhaul
}

//Chris's function
//Retyping popup. 
function retyping () {
  var verified = false;
  var risky = true;
  
  if (window.location.host.indexOf("www.") === -1)
  {
    var currentUrl =   window.location.host;
  }
  else
  {
    var currentUrl =  window.location.host.substring(4,window.location.host.length);
  }
  
  var count = 0;
  
  const close = () =>
  {
    if (verified)
    {
      document.getElementById("overlay12345").style.visibility = "hidden";
      document.getElementById("content12345").style.visibility = "hidden";  
    }
  }
  
  const verify = () =>
  {
    var input = document.getElementById("userInput12345").value;
    if (input === currentUrl)
    {
      count++;
      document.getElementById("paragraph12345").innerHTML = "<p>Enter the url one more time.</p>";
      if (count === 1)
      {
        document.getElementById("userInput12345").value = "";
      }
      if (count === 2)
      {
        document.getElementById("title12345").innerHTML = "<p>You're on the right site.</p>";
        document.getElementById("paragraph12345").innerHTML = "";
        verified = true;
        close();
      }
    }
  }
  
  const html =  '<div id="popup12345">\n' +
  '<div id = "overlay12345"></div>\n' +
  '<div id = "content12345">\n' +
    '<h1 id = "title12345">This is a risky site.</h1>\n' +
    '<p id = "paragraph12345">This page could be dangerous. Verify the URL to access it.</p>\n' +
    `<input  autocomplete="off" id = "userInput12345" placeholder="example.com" type ="text"></input>\n` +
  '</div>\n' +
  '</div>\n';
  
  if(risky)
  {
    var poppingContent = document.createElement("div");
  
    poppingContent.innerHTML = html + document.body.prepend(poppingContent);
    
    document.getElementById("userInput12345").oninput = verify;
  }
  
}
  

//Main logic of the program
//Delay 2 seconds to ensure that the website is fully loaded before searching through it
setTimeout(function(){
  //If the website is not matched by the regex filter
  if (found === null) {
    if (warningCBox) {
      detectSolana();  
    }
  } 
  //If the website is matched by the regex filter. 
  else {
    safePopup();
  }
}, 2000);
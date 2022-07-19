//Detect wether the current website is Safe. If not, check if the website is Solana related. If it is Solana related and not in the safe list, warn the user. 

//Set the current url to url
const url = window.location.href

//This is the filter for the websites. This should be updated, and automated in the future so links can be added easily. 
const regex = /\/\/(www.)?solend.fi\/|\/\/(www.)?jup.ag\/|\/\/(www.)?orca.so\//gm;

//Use the filter
const found = url.match(regex);

//Delay 2 seconds to ensure that the website is fully loaded before searching through it
setTimeout(function(){
  //If the website is not matched by the regex filter
  if (found === null) {
    var content = document.body.textContent || document.body.innerText;
    var contentLowerCase = content.toLowerCase()
    var hasSolana = contentLowerCase.indexOf("solana")!==-1;
    var hasSol = contentLowerCase.indexOf(" sol ")!==-1;
    var hasConnectWallet = contentLowerCase.indexOf("connect wallet")!==-1;
    var hasLaunchApp = contentLowerCase.indexOf("launch app")!==-1;
    //Debuging
    alert("Total score: " + (hasSolana + hasSol + hasConnectWallet + hasLaunchApp) + "\nSolana: " + hasSolana + "\nSol: " + hasSol + "\nConnect Wallet: " + hasConnectWallet + "\nLaunch App: " + hasLaunchApp)
    //If score is above n, alert user that this is a potentially unsafe solana website. 
    if (hasSolana + hasSol + hasConnectWallet + hasLaunchApp >= 2) {
      //Temporary alert. This will be replaced by an popup thats on the webpage. 
      alert("DANGER DANGER");
    } 
    else {
    }
  } 
  //If the website is matched by the regex filter. 
  else {
    //Temporary alert. This will be replaced by an popup thats on the webpage. 
    alert("SAFU!");
  }
}, 2000);


// //Test code for adding a popup on page
// //When the document loads call addElement
// document.body.onload = addElement;

// //addElement function
// function addElement () {
//   // create a new div element
//   const newDiv = document.createElement("div");
//   newDiv.classList.add("test");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContsent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }

var div = document.createElement("div");

div.innerHTML =
    '<div class="popup" id="popup-1">\n' +
      '<div class="overlay"></div>\n' +
      '<div class="content">\n' +
        '<div class="close-btn">&times;</div>\n' +
        '<h1>Title</h1>\n' +
        '<p>Blah blaha ablah</p>\n' +
      '</div>\n' +
    '</div>\n' +

document.body.appendChild(div);
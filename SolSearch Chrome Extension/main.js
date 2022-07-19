document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add("red");
//This is the URL
const link = window.location.href
//This is the filter for the websites
const regex = /\/\/(www.)?solend.fi\/|\/\/(www.)?jup.ag\/|\/\/(www.)?orca.so\//gm;
//use the filter
const found = link.match(regex);
//check if the filter = null
setTimeout(function(){
    if (found === null) {
        var content = document.body.textContent || document.body.innerText;
        var contentLowerCase = content.toLowerCase()
        var hasSolana = contentLowerCase.indexOf("solana")!==-1;
        var hasSol = contentLowerCase.indexOf(" sol ")!==-1;
        var hasConnectWallet = contentLowerCase.indexOf("connect wallet")!==-1;
        var hasLaunchApp = contentLowerCase.indexOf("launch app")!==-1;
        alert("Total score: " + (hasSolana + hasSol + hasConnectWallet + hasLaunchApp) + "\nSolana: " + hasSolana + "\nSol: " + hasSol + "\nConnect Wallet: " + hasConnectWallet + "\nLaunch App: " + hasLaunchApp)
        if (hasSolana + hasSol + hasConnectWallet + hasLaunchApp >= 2) {
            alert("DANGER DANGER");
        } else {
        }
      } else {
        alert("SAFU!");
      }
}, 2000);

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
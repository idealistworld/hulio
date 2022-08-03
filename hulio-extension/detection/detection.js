//Detection Algorithm
//Detect if a website is Solana related
//Only runs if url is not matched
function detectSolana(debugCBox) {
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
    var totalScore = hasSolana + hasSol + hasConnectWallet + hasLaunchApp;
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
      foundIgnoreWarnRetype = ignoreWarnRetypeListStr.indexOf(url);
      if (foundIgnoreWarnRetype === -1) {
        retyping();
      } else {
        foundIgnoreWarn = ignoreWarnListStr.indexOf(url);
        if (foundIgnoreWarn === -1) {
          warnPopup();
        }
      }
    }
    else {
      warnPopup();
    }
  }
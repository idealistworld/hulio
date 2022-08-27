//Detection Algorithm
//Detect if a website is Solana related
//Only runs if url is not matched
function detection(debugCBox) {
    //Scrape all the websites text and make it lowercase.
    var content = document.body.innerHTML || document.body.textContent;
    var contentLowerCase = content.toLowerCase()
    //Terms
    //Solana
    var hasSolana = contentLowerCase.indexOf("solana")!==-1;
    var hasSol = contentLowerCase.indexOf(" sol ")!==-1;
    //First Catagory: Is a website Solana related?
    var catSol = hasSolana || hasSol
    //Look for web3 enabled sites
    var hasConnectWallet = contentLowerCase.indexOf("connect wallet")!==-1;
    var hasLaunchApp = contentLowerCase.indexOf("launch app")!==-1;
    //Second Catagory: Web3?
    var catWeb3 = hasConnectWallet || hasLaunchApp
    //Is a website Solana related, and web3?
    var detected = catSol && catWeb3
    //Debuging
    if (debugCBox) {
      alert("Solana: " + hasSolana + "\nSol: " + hasSol + "\nConnect Wallet: " + hasConnectWallet + "\nLaunch App: " + hasLaunchApp)
    }
    //If score is above n, alert user that this is a potentially unsafe solana website. 
    if (detected) {
      return true
    } 
}

//Warning function, runs on websites that are solana related but unknown
//Only runs if warningCBox is checked
function warning() {
    if (retypingCBox) {
      if (!(checkList(ignoreWarnRetypeList, url))) {
        retyping();
      } else {
        if (!(checkList(ignoreWarnList, url))) {
          warnPopup();
        }
      }
    }
    else {
        if (!(checkList(ignoreWarnList, url))) {
          warnPopup();
      }
    }
  }

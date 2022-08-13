const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const rowSafeDB = decodeURIComponent(urlParams.get('encodedRowSafeDB'))
const url = decodeURIComponent(urlParams.get('encodedUrl'))

var smartContract = "Unknown";
var signingAddress = "Unknown";
var transactionHash = "Unknown";
var verifiedWebURL = "Unknown";
var websiteSigned = "Unknown";

function setFromDB () {
  chrome.storage.sync.get({
    SafeDB: '',
  }, function(items) {
    //Debugging
    //alert(JSON.stringify(items.SafeDB.rows[rowSafeDB]))
    transactionHash = items.SafeDB.rows[rowSafeDB].tx_hash;
    verifiedWebURL = items.SafeDB.rows[rowSafeDB].url;
    websiteSigned = items.SafeDB.rows[rowSafeDB].date_created;
    popuplateData ()
  });
}

function popuplateData () {
    var projectTitle = document.getElementById("projectTitle");
    insertString = "<a href='https://" + url + "'>" + url.toUpperCase()+ "</a>"
    projectTitle.innerHTML = insertString

    //We don't have this data yet
    document.getElementById("smartContractInfo").innerHTML = smartContract;

    //This is hard coded to our adress
    adress = "2v155UE19ghxH5CoUpBZQwjtYKHR9g4z7eS5qhPgJxTy"
    adressName = "Hulio Team"
    document.getElementById("signingAddress2").innerHTML = adress.slice(0,10) + "... (" + adressName + ")";
    document.getElementById("signingAddress2Link").href = "https://solscan.io/account/" + adress;

    document.getElementById("transactionHash").innerHTML = transactionHash.slice(0,23) + "...";
    document.getElementById("transactionHashLink").href = "https://solscan.io/tx/" + transactionHash;

    //date
    document.getElementById("verifiedWebURL").innerHTML = verifiedWebURL;
    //Date
    document.getElementById("websiteSigned").innerHTML = websiteSigned;
}

window.addEventListener('load', setFromDB);


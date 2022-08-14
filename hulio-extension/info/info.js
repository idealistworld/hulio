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
  chrome.storage.local.get({
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
    //var projectTitle = document.getElementById("projectTitle");
    document.getElementById("projectTitle").innerHTML = url.toUpperCase();
    insertString = "<a href='https://" + url + "'>" + url.toUpperCase()+ "</a>";
    var str2 = "https://" + url
    document.getElementById("projectTitleLink").href = str2;
    //This is hard coded to our adress
    adress = "2v155UE19ghxH5CoUpBZQwjtYKHR9g4z7eS5qhPgJxTy"
    adressName = "Hulio Team"
    document.getElementById("signingAddress2").innerHTML = adress.slice(0,10) + "... (" + adressName + ")";
    document.getElementById("signingAddress2Link").href = "https://solscan.io/account/" + adress;

    document.getElementById("transactionHash").innerHTML = transactionHash.slice(0,23) + "...";
    document.getElementById("transactionHashLink").href = "https://solscan.io/tx/" + transactionHash;

    //date
    document.getElementById("verifiedWebURL").innerHTML = verifiedWebURL;
    document.getElementById("verifiedWebURLLink").href = str2;
    //Date
    document.getElementById("websiteSigned").innerHTML = websiteSigned;
    document.getElementById("websiteSignedLink").href = "https://solscan.io/tx/" + transactionHash;
}

window.addEventListener('load', setFromDB);


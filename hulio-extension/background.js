chrome.runtime.onInstalled.addListener(function (object) {
    let internalUrl = chrome.runtime.getURL("welcome/welcome.html");
    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({ url: internalUrl }, function (tab) {});
    }
});

//Make an API call to send some Solana to addy
function giveReward (addy) {
    var sendApiUrl = "https://hulio-backend.herokuapp.com/api/transaction/send/";
    var token = "BLK!rj4J1&hgKVTAHrl435wQRDmdGN";
    (async () => {
        const rawResponse = await fetch(sendApiUrl + addy, {
            crossDomain: true,
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + token,
          }
        });
        const content = await rawResponse.json();
        return content;
      })();
}

//Get the whois Data for a specific URL
function checkDNS (url) {

}

//Main
//Listens for messages
//Runs specific functions for each message
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
        if (request.func === "openTab") {
            chrome.tabs.create({ url: request.url }, function (tab) {});
            sendResponse({farewell: "Sucess"});
        } else if (request.func === "giveReward") {
            sendResponse(giveReward(request.address));
        } else {
            sendResponse({farewell: "Not working"});
        }
    }
);


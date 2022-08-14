chrome.runtime.onInstalled.addListener(function (object) {
    let internalUrl = chrome.runtime.getURL("welcome/welcome.html");
    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({ url: internalUrl }, function (tab) {});
    }
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
        if (request.func === "openTab") {
            chrome.tabs.create({ url: request.url }, function (tab) {});
            sendResponse({farewell: "Sucess"});
        } else {
            sendResponse({farewell: "Not working"});
        }
    }
);


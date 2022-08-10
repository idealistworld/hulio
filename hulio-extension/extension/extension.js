var internalSettingsUrl = chrome.runtime.getURL("settings/settings.html");
function openTab () {
    chrome.tabs.create({ url: internalUrl }, function (tab) {
        console.log("New tab launched with http://yoursite.com/");
    });
}


window.onload = function () {
    //Using the vars el1, el2 here to avoid a bug where it said document.getElementById('save') was null
    var el1 = document.getElementById('settings')
    if (el1) {
      el1.addEventListener('click', openTab);
    }
}
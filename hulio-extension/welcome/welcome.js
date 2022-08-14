function tutorials () {
    var internalSettingsUrl = chrome.runtime.getURL("tutorialshub/tutorialhub.html");
    window.open(internalSettingsUrl, "_blank");}

function projects () {
    var internalSettingsUrl = chrome.runtime.getURL("home/home.html");
    window.open(internalSettingsUrl, "_blank");
}

function configure () {
    var internalSettingsUrl = chrome.runtime.getURL("settings/settings.html");
    window.open(internalSettingsUrl, "_blank");
}

window.onload = function () {
    //Using the vars el1, el2 here to avoid a bug where it said document.getElementById('save') was null
    var el1 = document.getElementById('tutorials')
    if (el1) {
      el1.addEventListener('click', tutorials);
    }
    var el2 = document.getElementById('projects')
    if (el2) {
        el2.addEventListener('click', projects)
    }
    var el3 = document.getElementById('configure')
    if (el3) {
        el3.addEventListener('click', configure)
    }
}

//Load safe/ignore/unsafe lists
//Update the list of safe sites
function pullSafeDB () {
    $.getJSON('https://hulio-backend.herokuapp.com/api/website/get_websites', function(json_data){
        if (json_data.status === "success") {
            chrome.storage.sync.set({
                SafeDB: json_data.result,
            }, function() {});
        } else {
            alert("Couldn't Acess backend")
        }
    });
}



function updateIgnoreSitesList (url) {
    var ignoreSitesList;
    $.get(url, function (data) {
        ignoreSitesList = data.split("\n");
        chrome.storage.sync.set({
            ignoreSitesList: ignoreSitesList,
        }, function () {
        });
    });
}

function initLists () {
    pullSafeDB();
    updateIgnoreSitesList("https://idealistworld.github.io/hulio/ignoreSitesList.txt");
}

setTimeout(function () {
    initLists();
}, 100);
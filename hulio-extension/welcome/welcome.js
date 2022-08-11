function tutorial () {
    alert("Tutorial");
}

function skip () {
    var internalSettingsUrl = chrome.runtime.getURL("settings/settings.html");
    window.open(internalSettingsUrl, "_self");
}

window.onload = function () {
    //Using the vars el1, el2 here to avoid a bug where it said document.getElementById('save') was null
    var el1 = document.getElementById('tutorial')
    if (el1) {
      el1.addEventListener('click', tutorial);
    }
    var el2 = document.getElementById('skip')
    if (el2) {
        el2.addEventListener('click', skip)
    }
}

//Load safe/ignore/unsafe lists
//Update the list of safe sites
function updateSafeSitesList (url) {
    var safeSitesList;
    var safeSitesListStr;
    $.get(url, function( data ) {
        safeSitesList = data.split("\n");
        safeSitesListStr = data.toLowerCase();
        chrome.storage.sync.set({
          safeSitesList: safeSitesList,
          safeSitesListStr: safeSitesListStr,
        }, function() {});
    });
}

function updateIgnoreSitesList (url) {
    var ignoreSitesList;
    var ignoreSitesListStr;
    $.get(url, function (data) {
        ignoreSitesList = data.split("\n");
        ignoreSitesListStr = data.toLowerCase();
        chrome.storage.sync.set({
            ignoreSitesList: ignoreSitesList,
            ignoreSitesListStr: ignoreSitesListStr,
        }, function () {
            checkLists()
        });
    });
}

//Check to ensure that the lists are not empty
//Return true or false
function checkLists () {
    chrome.storage.sync.get({
        safeSitesListStr: "",
        ignoreSitesListStr: "",
    }, function (items) {
        if (!(items.safeSitesListStr.length && items.ignoreSitesListStr.length)) {
            alert("Unable to acess the database, extension functionality may be impared. Reinstall or manually pull from the database in settings.");
        }
    });
}

function initLists () {
    updateSafeSitesList("https://idealistworld.github.io/hulio/safeSitesList.txt");
    updateIgnoreSitesList("https://idealistworld.github.io/hulio/ignoreSitesList.txt");
}

setTimeout(function () {
    initLists();
  }, 100);


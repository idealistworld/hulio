// Saves options to chrome.storage
function save_options() {
    var debugCBox = document.getElementById('debugCBox').checked;
    chrome.storage.sync.set({
      debugCBox: debugCBox,
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      debugCBox: false,
    }, function(items) {
      document.getElementById('debugCBox').checked = items.debugCBox;
    });
  }

function updateIgnoreSitesList () {
  //Pull list from somewhere and update the list
  //Needs to be coded
  //Then generate the new regex filter
  //Needs to be coded
  //Update updateStatus text, then clear it
  var ignoreSitesListUrl = "https://idealistworld.github.io/hulio/ignoreSitesList.txt";
  var ignoreSitesList;
  var ignoreSitesListStr;
  $.get(ignoreSitesListUrl, function( data ) {
    ignoreSitesList = data.split("\n");
    ignoreSitesListStr = data.toLowerCase();
      chrome.storage.sync.set({
        ignoreSitesList: ignoreSitesList,
        ignoreSitesListStr: ignoreSitesListStr,
      }, function() {
        // Update status to let user know sites were updated.
        var updateStatus = document.getElementById('updateIgnoreSitesStatus');
        updateStatus.textContent = 'Ignore Sites List updated.';
        setTimeout(function() {
          updateStatus.textContent = '';
        }, 750);
      });
  });
}

function showIgnoreWarnRetype() {
  setTimeout(function() {
    chrome.storage.sync.get({
      ignoreWarnRetypeList: [],
      ignoreWarnRetypeListStr: '',
    }, function(items) {
      alert('Ignore Warn Retype list: ' + items.ignoreWarnRetypeList + 'Type:' + typeof(items.ignoreWarnRetypeList));
      alert(items.ignoreWarnRetypeListStr);
    });
  }, 750);
}

function showIgnoreWarn() {
  setTimeout(function() {
    chrome.storage.sync.get({
      ignoreWarnList: [],
      ignoreWarnListStr: '',
    }, function(items) {
      alert('Ignore Warn list: ' + items.ignoreWarnList);
      alert(items.ignoreWarnListStr);
    });
  }, 750);
}

//This function shwos all the lists and strings that are currently in storage. 
function showAll () {
  chrome.storage.sync.get({
    ignoreSitesList: [],
    ignoreSitesListStr: '',
    ignoreWarnList: [],
    ignoreWarnListStr: '',
    ignoreWarnRetypeList: [],
    ignoreWarnRetypeListStr: '',
  }, function(items) {
    alert('Ignore Sites List: ' + items.ignoreSitesList + 
    '\n Ignore Sites List String: ' + items.ignoreSitesListStr +
    '\n Ignore Warn List: ' + items.ignoreWarnList + 
    '\n Ignore Warn List String: ' + items.ignoreWarnListStr +
    '\n Ignore Warn Retype List: ' + items.ignoreWarnRetypeList +
    '\n Ignore Warn Retype List: ' + items.ignoreWarnRetypeListStr);
  });
}

function pullSafeDB () {
  $.getJSON('https://hulio-backend.herokuapp.com/api/website/get_websites', function(json_data){
    if (json_data.status === "success") {
      chrome.storage.sync.set({
        SafeDB: json_data.result,
      }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('pullSafeDBstatus');
        status.textContent = 'DB pulled.';
        setTimeout(function() {
          status.textContent = '';
        }, 750);
      });
    } else {
      alert("Couldn't Acess backend")
    }
  });
}

function printSafeDB () {
  setTimeout(function() {
    chrome.storage.sync.get({
      SafeDB: '',
    }, function(items) {
      alert(JSON.stringify(items.SafeDB));
    });
  }, 500);
}


window.onload=function(){
    //Using the vars el1, el2 here to avoid a bug where it said document.getElementById('save') was null
    var el1 = document.getElementById('save')
    if (el1) {
        el1.addEventListener('click', save_options);
    }
    var el2 = document.getElementById('pullSafeDB')
    if (el2) {
      el2.addEventListener('click', pullSafeDB)
    }
    var el3 = document.getElementById('updateIgnoreSitesButton')
    if (el3) {
      el3.addEventListener('click', updateIgnoreSitesList)
    }
    var el4 = document.getElementById('showIgnoreWarnRetypeSites')
    if (el4) { 
      el4.addEventListener('click', showIgnoreWarnRetype)
    }
    var el5 = document.getElementById('showIgnoreWarnSites')
    if (el5) {
      el5.addEventListener('click', showIgnoreWarn)
    }
    var el6 = document.getElementById('showAllLists')
    if (el6) {
      el6.addEventListener('click', showAll)
    }
    var el7 = document.getElementById('advancedSettings')
    if (el7) {
      el7.addEventListener('click', openAdvanced)
    }
}
document.addEventListener('DOMContentLoaded', restore_options);
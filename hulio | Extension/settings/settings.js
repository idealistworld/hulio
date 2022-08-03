// Saves options to chrome.storage
function save_options() {
    var warningCBox = document.getElementById('warningCBox').checked;
    var retypingCBox = document.getElementById('retypingCBox').checked;
    var debugCBox = document.getElementById('debugCBox').checked;
    chrome.storage.sync.set({
      warningCBox: warningCBox,
      retypingCBox: retypingCBox,
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
      warningCBox: true,
      retypingCBox: true,
      debugCBox: false,
    }, function(items) {
      document.getElementById('warningCBox').checked = items.warningCBox;
      document.getElementById('retypingCBox').checked = items.retypingCBox;
      document.getElementById('debugCBox').checked = items.debugCBox;
    });
  }

//Update the list of safe sites
function updateSafeSitesList () {
    //Pull list from somewhere and update the list
    //Needs to be coded
    //Then generate the new regex filter
    //Needs to be coded
    //Update updateStatus text, then clear it
    var safeSitesListUrl = "https://idealistworld.github.io/hulio/safeSitesList.txt";
    var safeSitesList;
    var safeSitesListStr;
    $.get(safeSitesListUrl, function( data ) {
        safeSitesList = data.split("\n");
        safeSitesListStr = data.toLowerCase();
        chrome.storage.sync.set({
          safeSitesList: safeSitesList,
          safeSitesListStr: safeSitesListStr,
        }, function() {
          // Update status to let user know sites were updated.
          var updateStatus = document.getElementById('updateSafeSitesStatus');
          updateStatus.textContent = 'Safe Sites List updated.';
          setTimeout(function() {
            updateStatus.textContent = '';
          }, 750);
        });
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
  setTimeout(function() {
    chrome.storage.sync.get({
      ignoreSitesListStr: '',
    }, function(items) {
      alert(ignoreSitesListStr);
    });
  }, 750);
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



window.onload=function(){
    //Using the vars el1, el2 here to avoid a bug where it said document.getElementById('save') was null
    var el1 = document.getElementById('save')
    if (el1) {
        el1.addEventListener('click', save_options);
    }
    var el2 = document.getElementById('updateSafeSites')
    if (el2) {
        el2.addEventListener('click', updateSafeSitesList)
    }
    var el3 = document.getElementById('updateIgnoreSites')
    if (el3) {
      el3.addEventListener('click', updateIgnoreSitesList)
    }
    var el4 = document.getElementById('showIgnoreWarnRetypeSites')
    if (el4) { 
      el4.addEventListener('click', showIgnoreWarnRetype)
    }
}
document.addEventListener('DOMContentLoaded', restore_options);
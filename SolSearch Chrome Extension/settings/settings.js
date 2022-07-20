// Saves options to chrome.storage
function save_options() {
    var color = document.getElementById('color').value;
    var warningCBox = document.getElementById('warningCBox').checked;
    var retypingCBox = document.getElementById('retypingCBox').checked;
    var debugCBox = document.getElementById('debugCBox').checked;
    chrome.storage.sync.set({
      favoriteColor: color,
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
      favoriteColor: 'red',
      warningCBox: true,
      retypingCBox: true,
      debugCBox: false,
    }, function(items) {
      document.getElementById('color').value = items.favoriteColor;
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
    var updateStatus = document.getElementById('updateStatus');
    updateStatus.textContent = 'Safe Sites List updated.';
    setTimeout(function() {
        updateStatus.textContent = '';
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
}
document.addEventListener('DOMContentLoaded', restore_options);
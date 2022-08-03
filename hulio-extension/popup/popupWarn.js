//SafePopup Function
//Runs on all urls that are matched
function warnPopup () {
    //Create our safe popup
    var div = document.createElement("div");
    //This HTML is inserted at the top of the body. 
    div.innerHTML =
      '<div id="popup-warn">\n' +
        '<div id="popup-safe-content">\n' +
        '<h1 id = "title123456">This site might not be secure.</h1>\n' +
          '<p id = "paragraph123456">This website is not part of your current whitelist. Double check the URL to be safe.</p>\n' +
          '<button id="buttonIgnore">Ignore</button>\n' +
        '</div>\n' + 
      '</div>\n'
    document.body.append(div);
    //Add to ignoreWarnList
    function updateIgnoreWarnList() {
      chrome.storage.sync.get({
        ignoreWarnList: [],
        ignoreWarnListStr: '',
      }, function(items) {
        const ignoreWarnList = items.ignoreWarnList;
        var ignoreWarnListStr = items.ignoreWarnListStr;
        setIgnoreWarnRetypeList(ignoreWarnList, ignoreWarnListStr, url);
      });
    };

    function setIgnoreWarnRetypeList(_list, _str, _urlvar) {
      if (_str.indexOf(_urlvar) == -1) {
        _list.push(_urlvar);
        chrome.storage.sync.set({
          ignoreWarnList: _list,
          ignoreWarnListStr: _str + ", " + _urlvar,
        }, function() {
        });
      } else {
      }
    }

    document.getElementById("buttonIgnore").onclick = updateIgnoreWarnList;
    //Fade out after a few seconds
    //Needs to be coded, and css needs an overhaul
    setTimeout(() => 
    {
      document.getElementById("popup-warn").remove();
    }, 3000)
  }
//Chris's function
//Retyping popup. 
function retyping () {
    var verified = false;
    var risky = true;
    
    var count = 0;
    
    const close = () =>
    {
      if (verified)
      {
        document.getElementById("popup12345").remove();
      }
    }
    function updateIgnoreWarnRetypeList() {
      
      chrome.storage.sync.get({
        ignoreWarnRetypeList: [],
        ignoreWarnRetypeListStr: '',
      }, function(items) {
        const ignoreWarnRetypeList = items.ignoreWarnRetypeList;
        var ignoreWarnRetypeListStr = items.ignoreWarnRetypeListStr;
        setIgnoreWarnRetypeList(ignoreWarnRetypeList, ignoreWarnRetypeListStr, url);
      });
    };

    function setIgnoreWarnRetypeList(_list, _str, _urlvar) {
      if (_str.indexOf(_urlvar) == -1) {
        _list.push(_urlvar);
        chrome.storage.sync.set({
          ignoreWarnRetypeList: _list,
          ignoreWarnRetypeListStr: _str + ", " + _urlvar,
        }, function() {
        });
      } else {
      }
    }

    const verify = () =>
    {
      var input = document.getElementById("userInput12345").value;
      if (input === url)
      {
        count++;
        document.getElementById("paragraph12345").innerHTML = "<p>Enter the url one more time.</p>";
        if (count === 1)
        {
          document.getElementById("userInput12345").value = "";
        }
        if (count === 2)
        {
          document.getElementById("title12345").innerHTML = "<p>You're on the right site.</p>";
          document.getElementById("paragraph12345").innerHTML = "";
          verified = true;
          close();
          //Uodate the ignoreWarnRetypeList now that they've typed in in once
          updateIgnoreWarnRetypeList();
        }
      }
    }
    
    const html =  '<div id="popup12345">\n' +
    '<div id = "overlay12345"></div>\n' +
    '<div id = "content12345">\n' +
      '<h1 id = "title12345">This is a risky site.</h1>\n' +
      '<p id = "paragraph12345">This page could be dangerous. Verify the URL to access it.</p>\n' +
      `<input  autocomplete="off" id = "userInput12345" placeholder="example.com" type ="text"></input>\n` +
    '</div>\n' +
    '</div>\n';
    
    if(risky)
    {
      var poppingContent = document.createElement("div");
      poppingContent.innerHTML = html + document.body.prepend(poppingContent); 
      document.getElementById("userInput12345").oninput = verify;
    }


}
//Retyping popup. 
function retyping () {
    var verified = false;    
    var count = 0;
    
    //Remove the popup element, after the url is verified
    const close = () => {
      if (verified) {
        document.getElementById("popup12345").remove();
      }
    }

    function updateIgnoreWarnRetypeList() {
      chrome.storage.local.get({
        ignoreWarnRetypeList: [],
      }, function(items) {
        const ignoreWarnRetypeList = items.ignoreWarnRetypeList;
        setIgnoreWarnRetypeList(ignoreWarnRetypeList, url);
      });
    };

    function setIgnoreWarnRetypeList(_list, _urlvar) {
      _list.push(_urlvar);
      chrome.storage.local.set({
        ignoreWarnRetypeList: _list,
      }, function() {
      });
    }

    const verify = () => {
      var input = document.getElementById("userInput12345").value;
      if (input === url) {
        count++;
        document.getElementById("paragraph12345").innerHTML = "<p>Enter the url one more time before continuing.</p>";
        document.getElementById("title12345").innerHTML = "<p>So far, so good!</p>";
        if (count === 1) {
          document.getElementById("userInput12345").value = "";
        }
        if (count === 2) {
          document.getElementById("title12345").innerHTML = "<p>You're on the right site.</p>";
          document.getElementById("paragraph12345").innerHTML = "";
          verified = true;
          close();
          //Uodate the ignoreWarnRetypeList now that they've typed in in once
          updateIgnoreWarnRetypeList();
        }
      }
    }
    
    var poppingContent = document.createElement("div");
    var matches = closest.length
    if (matches === 0) {
      if (debugCBox) {
        console.log("No Matches")
      }
      poppingContent.innerHTML = '<div id="popup12345">\n' +
      '<div id = "overlay12345"></div>\n' +
      '<div id = "content12345">\n' +
        '<h1 id = "title12345">This is a potentially risky site.</h1>\n' +
        '<p id = "paragraph12345">This page is not in our database. Verify the URL before accessing it.</p>\n' +
        `<input  autocomplete="off" id = "userInput12345" placeholder="example.com" type ="text"></input>\n` +
      '</div>\n' +
      '</div>\n'
    } else {
      if (debugCBox) {
        console.log(closest[0])
      }
      poppingContent.innerHTML = '<div id="popup12345">\n' +
      '<div id = "overlay12345"></div>\n' +
      '<div id = "content12345">\n' +
        '<h1 id = "title12345">Did you mean do go to <a id="elemMatchedUrl" target="_blank" href=""><p id = "elemMatchedUrlText">Not Available</p></a>?</h1>\n' +
        '<p id = "paragraph12345">This page is not in our database. Verify the URL before accessing it.</p>\n' +
        `<input  autocomplete="off" id = "userInput12345" placeholder="example.com" type ="text"></input>\n` +
      '</div>\n' +
      '</div>\n'
    }
    
    document.body.prepend(poppingContent); 
    var elemMatchedUrl = document.getElementById("elemMatchedUrl")
    if (elemMatchedUrl) {
      elemMatchedUrl.href = "https://" + closest[0]
    }
    var elemMatchedUrlText = document.getElementById("elemMatchedUrlText")
    if (elemMatchedUrlText) {
      elemMatchedUrlText.innerHTML = closest[0]
    }
    document.getElementById("userInput12345").oninput = verify;
}
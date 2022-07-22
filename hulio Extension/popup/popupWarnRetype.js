//Chris's function
//Retyping popup. 
function retyping () {
    var verified = false;
    var risky = true;
  
    if (window.location.host.indexOf("www.") === -1)
    {
      var currentUrl =   window.location.host;
    }
    else
    {
      var currentUrl =  window.location.host.substring(4,window.location.host.length);
    }
    
    var count = 0;
    
    const close = () =>
    {
      if (verified)
      {
        document.getElementById("overlay12345").style.visibility = "hidden";
        document.getElementById("content12345").style.visibility = "hidden";  
      }
    }
    
    const verify = () =>
    {
      var input = document.getElementById("userInput12345").value;
      if (input === currentUrl)
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
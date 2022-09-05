//Check the DNS record of a site
async function checkDNS() 
{
    //We have limited whois api
    var apiKey = "11ec109720e04e049940d6b81e3eae8b"

    //Whoisfreaks included this in their sample api call
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    //This seems to work very well
    let response = await fetch("https://api.whoisfreaks.com/v1.0/whois?whois=live&domainName=" + url + "&apiKey=" + apiKey, requestOptions);
    let data = await response.json();
    
    //Debugging
    if (debugCBox) {
        console.log(data);
        console.log(data["create_date"])
    }
    
    //Acess data to get our variables
    var createDate = data["create_date"]
    var updateDate = data["update_date"]

    //Get how many days ago the site was created and update
    var createDateUnix = Math.floor(new Date(createDate).getTime() / 1000)
    var updateDateUnix = Math.floor(new Date(updateDate).getTime() / 1000)
    var currentDateUnix = Math.floor(new Date().getTime() / 1000)
    //Set global vars
    updated = Math.floor((currentDateUnix - updateDateUnix)/86400)
    created = Math.floor((currentDateUnix - createDateUnix)/86400)

    //Debugging
    if (debugCBox) {
        console.log("DNS was registered " + created + " days ago")
        console.log("DNS was updated " + updated + " days ago")
    }
}
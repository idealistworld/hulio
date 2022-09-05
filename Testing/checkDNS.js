import fetch from "node-fetch";

var url = "solend.fi"
var apiKey = "11ec109720e04e049940d6b81e3eae8b"

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

async function load() 
{
  let response = await fetch("https://api.whoisfreaks.com/v1.0/whois?whois=live&domainName=" + url + "&apiKey=" + apiKey, requestOptions);
  let data = await response.json();
  console.log(data);
  console.log(data["create_date"])
}

//Dont want to waste API credits
//load()

//Testing Response
var response = '[{"status":true,"domain_name":"solend.fi","query_time":"2022-09-04 22:54:08","whois_server":"whois.fi","domain_registered":"yes","create_date":"2021-05-08","update_date":"2022-03-09","expiry_date":"2023-05-08","domain_registrar":{"registrar_name":"101Domain GRS Ltd.","website_url":"http://101domain.com"}}]'
//This is different than how vars would normally be set
var data = JSON.parse(response)
console.log(data)
var createDate = data[0].create_date
var updateDate = data[0].update_date

//All of this can be actually used
var createDateUnix = Math.floor(new Date(createDate).getTime() / 1000)
var updateDateUnix = Math.floor(new Date(updateDate).getTime() / 1000)
var currentDateUnix = Math.floor(new Date().getTime() / 1000)
var updated = Math.floor((currentDateUnix - updateDateUnix)/86400)
var created = Math.floor((currentDateUnix - createDateUnix)/86400)
console.log("DNS was registered " + created + " days ago")
console.log("DNS was updated " + updated + " days ago")



var test;
if (test) {
    console.log("hi")
}
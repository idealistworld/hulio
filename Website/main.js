const introParagraph = "<p>Web3? dApp? Blockchain? You can count on hulio to be with you through it all. Learn your way around the ecosystem, stay safe, and even earn free Solana with ease. hulio helps strengthen existing projects by providing an in-browser solution to common crypto user experience pitfalls. Whether a newcomer or veteran, hulio will enhance your adventures in the world of crypto!</p> ";
const mainButtons = `<button onclick="window.open('https://github.com/idealistworld/hulio', '_blank')" id="action-button1" class="fifth" onclick="location.href = 'https://youtube.com';"> Download </button> <button id="action-button2" class="fifth" onclick="howItWorks()">Features</button></div>`;
const arrayNavButtons = `<div style = "width: 40%;"><button id="action-button2" class="fifth nav" onclick="prev()">Previous</button> <button id="action-button2" class="fifth nav" onclick="next()", '_blank')">Continue</button>`;
const vanityMetrics = `<div id="vanity-metrics"><div id="vanity1"> <h1>30+</h1> <div class="vanity-writing"> Solana Partners </div> </div> <div id="vanity2"> <h1>10,000+</h1> <div class="vanity-writing"> Downloads </div> </div> </div>`;
const actionButtons = `<div id="action-button"> <button id="action-button1" class="fifth glow" onclick="window.open('https://github.com/idealistworld/hulio', '_blank')"> Download </button> <button id="action-button2" class="fifth glow" onclick="howItWorks()"> Features </button> </div>`;
const infoLinks = `<div style = "width: 80%;"><button id="action-button2" class="fifth nav" onclick="window.open('https://docs.google.com/presentation/d/1voLaGQ93hmkyzcT5xl4rcQb-_wgRvSuW7KEf2tH71cE/edit?usp=sharing', '_blank')">Pitch Deck</button> <button id="action-button2" class="fifth nav" onclick="window.open('https://youtu.be/Dq0MKkCk99s', '_blank')">Pitch Video</button>`;
const contactUs = `<div>Being crypto enthusiasts at heart, we cherish the space, community, and constantly strive to help all aspects of it. Whether you’re looking to partner or just chat, we’d love to connect. Hope to hear from you soon!</div>`

const step1 = '<div style = "width: 80%;"><h2>Explore the Ecosystem </h2></div>We provide users with in-browser tutorials for dApps in the Solana ecosystem. Our guides explain what the dApps do, how they work, and even walk users through practice exercises using the application. <div class = "spacing"></div><div style = "width: 80%;"><h2>Get Rewarded </h2></div>We provide users with free Solana when engaging in tutorials, allowing them to interact with dApps without having to buy crypto. <div class = "spacing"></div>';
const step2 = '<div style = "width: 80%;"><h2>Browse Securely</h2></div>Avoid scams with our anti-phishing security popups. We verify each visited website with our decentralized database.<div class = "spacing"></div><div style = "width: 80%;"><h2>Blockchain Verification </h2></div>We allow smart contract developers to sign and verify their URL on the Solana blockchain, providing an extra layer of security and verification. <div class = "spacing"></div>';
const step3 = '<div style = "width: 80%;"><h2>Engage </h2></div>Description of this feature coming soon.  More detail and capabilites on the way.<div class = "spacing"></div><div style = "width: 80%;"><h2>Stay Safe </h2></div>Description of this feature coming soon.  More detail and capabilites on the way. <div class = "spacing"></div>';
const title1 = '<h1>Features | Get Started</h1>';
const title2 = '<h1>Features | Stay Safe</h1>';
const title3 = '<h1>Features | Engage</h1>';


const arr2 = [title1, title2, title3];
const arr = [step1, step2, step3];
var count = 0;

const prev = () => {
    if (count !== 0) {
        count--;
        document.getElementById("writing-paragraph").innerHTML = arr[count];
        document.getElementById("writing-title").innerHTML = arr2[count];
    }
    else {
        count = arr.length - 1;
        document.getElementById("writing-paragraph").innerHTML = arr[count];
        document.getElementById("writing-title").innerHTML = arr2[count];
    }
}

const next = () => {
    if (count !== arr.length - 1) {
        count++;
        document.getElementById("writing-paragraph").innerHTML = arr[count];
        document.getElementById("writing-title").innerHTML = arr2[count];

    }
    else {
        count = 0;
        document.getElementById("writing-paragraph").innerHTML = arr[count];
        document.getElementById("writing-title").innerHTML = arr2[count];
    }
}

const contact = () => {
    document.getElementById("writing-title").innerHTML = "<h1>Let's Get Talking.</h1>";
    document.getElementById("writing-paragraph").innerHTML = contactUs;
    document.getElementById("action-button").innerHTML = `<button onclick="location.href = 'mailto: cnakayama567@gmail.com';" class="btn-flip" data-back="Hello! :)" data-front="Email Us"></button> <button onclick="window.open('https://t.me/idealist', '_blank')" class="btn-flip" data-back="Hello! :)" data-front="Text Us"></Button>`;
    document.getElementById("vanity-metrics").innerHTML = "";
}

const home = () => {
    document.getElementById("writing-title").innerHTML = `<h1>Your personal <br> "<div class="effect">friend</div> that does <span class="txt-rotate" data-period="2000"
    data-rotate='[ "crypto", "web3", "NFTs", "DeFi", "GameFi" ]'></span>".</h1>`;
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
    document.getElementById("writing-paragraph").innerHTML = introParagraph;
    document.getElementById("action-button").innerHTML = actionButtons;
    document.getElementById("vanity-metrics").innerHTML = vanityMetrics;
}

const howItWorks = () => {
    document.getElementById("writing-title").innerHTML = arr2[count];
    document.getElementById("writing-paragraph").innerHTML = arr[count];
    document.getElementById("action-button").innerHTML = arrayNavButtons;
    document.getElementById("vanity-metrics").innerHTML = "";
}

const info = () => {
    document.getElementById("action-button").innerHTML = "";
    document.getElementById("vanity-metrics").innerHTML = "";
    document.getElementById("writing-title").innerHTML = `<h1>Litepaper.</h1>`;
    document.getElementById("writing-paragraph").innerHTML = ` 
    <div style="color: #2c2b2b; border-radius: 5px;padding: 3%; background-color: white;height:315px;width:90%;border:1px solid #4e4e4e;overflow:auto;" class = "scroll">
    <p style = "color: #2c2b2b"><h3>hulio</h3>
    <br>
    Our goal is to make sure the next “1B+ crypto users” are not just passive holders, but engaged, educated, and active web3 community members. We plan to accomplish this through increasing security for web3 users and providing a on chain “Coinbase Earn” type program for teaching users about the Solana dApp ecosystem. These two features will lower the barrier to entry for passive holders and help enable them to become active web3 users.
    <br>
    <br>
    <h3>How it Works</h3>
    <br>
    <h3>Security</h3>
    One of the biggest problems facing crypto users is the issue of security. Phishing links, “copycat” websites, and hacks are common dangers web3 community members face. We help combat these through our website verification process. Our team collects lists of known reputable projects and known scams, then displays the website’s “trust status” when a user visits it. For trusted websites, we display a transaction on the blockchain signed by our or the project’s dev team verifying that the URL being visited is the one associated with the official project’s smart contract.
    <br>
    <br>
    <h3>Tutorials</h3>
    Holding crypto is only half of the fun. Many new users aren’t aware that dApps and other projects on Solana exist, much less know how to use them. We want to change that. hulio offers in-browser interactive tutorials for some of the biggest projects on Solana, walking users through how to use each application step by step. During the tutorial, users are awarded Solana (and in the future native token for the project as well), providing incentive and the ability to interact with the blockchain without having to have owned crypto prior. We’re constantly adding tutorials, educating new users and helping early stage projects gain informed and engaged traction.
    <br>
    <br>
    <h3>Discover</h3>
    Since we verify each web3 website a user visits, we can follow where Solana community traffic is being directed. This allows us to find the best new projects before anyone else. After a security check, we display these budding new projects on our “explore” page, exposing users to the newest frontier of the ecosystem.
    <br>
    <br>
    <h3>Demo Video</h3>
    <br>
    https://youtu.be/Dq0MKkCk99s
    <br>
    <br>
    <h3>Installation of hulio Video</h3>
    <br>
    https://youtu.be/TOdbDQ44sC4
    <br>
    <br>
    <h3>How We Built hulio and Future Plans</h3>
    <br>
    hulio is currently comprised of the website, the chrome extension, and a simple express postgresql backend hosted on heroku. The file structure can be seen below:
    <br>
    Current technical design can be vastly improved as we outline our plans for doing so below, however how the extension currently works is --
    <br>
    <br>
    <h3>Welcome Page</h3>
    <br>
    After the user installs the extension they are directed to a welcome page where they are able to learn about the extension and then proceed to the dApp explore page.
    <br>
    <br>
    <h3>Explore Page</h3>
    <br>
    The Hulio explore page provides users with a curated list of dApps that have interactive tutorials. Users are able to complete tutorials and learn about dApp functionality for a reward. The hulio explore page is a great way for new web3 users to get an idea of what dApps are out there and what problems they solve.
    <br>
    <br>
    <h3>Interactive Tutorial</h3>
    <br>
    The benefit to being a web extension is that hulio is able to overlay the tutorial directly on the dApp that the user is learning about. This is done by a series of popups that the extension has hard-coded through a series of divs getting appended to the website. After the tutorial is complete and the user has shown proficiency with the dApp, the user is automatically rewarded / airdropped tokens. Currently this is handled by the heroku backend utilizing solana web3js.
    <br>
    <br>
    <h3>Website Safety</h3>
    <br>
    The hulio extension provides users with safety suggestions whenever they land on a web3 enabled website based on if the website is in our database. Currently our web3 detection script can be improved, however it operates by checking website html for any mentions of web3 keywords such as 'connect wallet'. If the detection scripts triggers, then it is checked again our postgresql database through the express backend and if not found, the user is warned that the website has not yet been verified, and they have to verify the website URL in order to continue. We do this in an effort to prevent users from landing on phishing websites or risky dApps.
    <br>
    <br>
    <h3>Settings</h3>
    <br>
    <br>
    <h3>Extension settings currently include:</h3>
    <br>
    
    toggling on / off website safety recommendations
    <br>
    toggling on / off tutorials
    <br>
    advanced settings to view backend information and user specific data such as their personal trusted website list
    <br>
    <br>
    <h3>Future Plans</h3>
    <br>
    Our current backend infrastructure is not quite production ready. Improvements include:
    <br>    
    improving the web3 detection script
    <br>
    transitioning website components to react
    <br>
    cleaning up and streamlining safety popup code
    <br>
    improving backend security
    <br>
    adding additional database columns
    <br>
    expanding the dapp explore page
    <br>
    building tutorials for and supporting additional dapps
    <br>
    more coming soon...</p>
    </div>${infoLinks}`;
}

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};
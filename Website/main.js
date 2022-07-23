const introParagraph = "<p>Web3? dApp? Blockchain? You can count on hulio to be with you through it all. Learn your way around the ecosystem, stay safe, and even earn free Solana with ease. hulio helps strengthen existing projects by providing an in-browser solution to common crypto user experience pitfalls. Whether a newcomer or veteran, hulio will enhance your adventures in the world of crypto!</p> ";
const mainButtons = `<button onclick="window.open('https://github.com/idealistworld/hulio', '_blank')" id="action-button1" class="fifth" onclick="location.href = 'https://youtube.com';"> Download </button> <button id="action-button2" class="fifth" onclick="howItWorks()">Features</button></div>`;
const arrayNavButtons = `<div style = "width: 40%;"><button id="action-button2" class="fifth nav" onclick="prev()">Previous</button> <button id="action-button2" class="fifth nav" onclick="next()", '_blank')">Continue</button>`;
const vanityMetrics = `<div id="vanity-metrics"><div id="vanity1"> <h1>30+</h1> <div class="vanity-writing"> Solana Partners </div> </div> <div id="vanity2"> <h1>10,000+</h1> <div class="vanity-writing"> Downloads </div> </div> </div>`;
const actionButtons = `<div id="action-button"> <button id="action-button1" class="fifth" onclick="window.open('https://github.com/idealistworld/hulio', '_blank')"> Download </button> <button id="action-button2" class="fifth" onclick="howItWorks()"> Features </button> </div>`;
const infoLinks = `<div style = "width: 80%;"><button id="action-button2" class="fifth nav" onclick="window.open('https://github.com/idealistworld/hulio', '_blank')">Pitch Deck</button> <button id="action-button2" class="fifth nav" onclick="window.open('https://github.com/idealistworld/hulio', '_blank')">Pitch Video</button>`;
const contactUs = `<div>Being crypto enthusiasts at heart, we cherish the space, community, and constantly strive to help all aspects of it. Whether you’re looking to partner or just chat, we’d love to connect. Hope to hear from you soon!</div>`

const step1 = '<div style = "width: 80%;"><h2>Stay Safe </h2>Description of this feature coming soon.  More detail and capabilites on the way.</div>';
const step2 = '<div style = "width: 80%;"><h2>Learn More </h2>Description of this feature coming soon.  More detail and capabilites on the way.</div>';
const step3 = '<div style = "width: 80%;"><h2>Get Rewarded</h2>Description of this feature coming soon.  More detail and capabilites on the way.</div>';

const arr = [step1, step2, step3];
var count = 0;

const prev = () => {
    if (count !== 0) {
        count--;
        document.getElementById("writing-paragraph").innerHTML = arr[count];
    }
    else {
        count = arr.length - 1;
        document.getElementById("writing-paragraph").innerHTML = arr[count];
    }
}

const next = () => {
    if (count !== arr.length - 1) {
        count++;
        document.getElementById("writing-paragraph").innerHTML = arr[count];
    }
    else {
        count = 0;
        document.getElementById("writing-paragraph").innerHTML = arr[count];
    }

}

const contact = () => {
    document.getElementById("writing-title").innerHTML = "<h1>Let's Get Talking.</h1>";
    document.getElementById("writing-paragraph").innerHTML = contactUs;
    document.getElementById("action-button").innerHTML = `<button onclick="location.href = 'mailto: cnakayama567@gmail.com';" class="btn-flip" data-back="Hello! :)" data-front="Email Us"></button> <button onclick="window.open('https://t.me/idealist', '_blank')" class="btn-flip" data-back="Hello! :)" data-front="Text Us"></Button>`;
    document.getElementById("vanity-metrics").innerHTML = "";
}

const home = () => {
    document.getElementById("writing-title").innerHTML = `<h1>Your personal <br> "<div class = "effect">friend</div> that does crypto".</h1>`;
    document.getElementById("writing-paragraph").innerHTML = introParagraph;
    document.getElementById("action-button").innerHTML = actionButtons;
    document.getElementById("vanity-metrics").innerHTML = vanityMetrics;
}

const howItWorks = () => {
    document.getElementById("writing-title").innerHTML = `<h1>Features.</h1>`;
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
    <h3 style = "color: #2c2b2b">Coming soon...</h3>
    </div>

    ${infoLinks}
    `;
}

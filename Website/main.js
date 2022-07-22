const introParagraph = "<p>If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.</p> ";
const mainButtons = `<button onclick="window.open('https://github.com/idealistworld/hulio', '_blank')" id="action-button1" class="fifth" onclick="location.href = 'https://youtube.com';"> Download </button> <button id="action-button2" class="fifth" onclick="howItWorks()">How it Works</button></div>`;
const arrayNavButtons = `<div style = "width: 40%;"><button id="action-button2" class="fifth nav" onclick="prev()">Previous</button> <button id="action-button2" class="fifth nav" onclick="next()", '_blank')">Continue</button>`;
const vanityMetrics = `<div id="vanity-metrics"><div id="vanity1"> <h1>30+</h1> <div class="vanity-writing"> Solana Partners </div> </div> <div id="vanity2"> <h1>10,000+</h1> <div class="vanity-writing"> Downloads </div> </div> </div>`;
const actionButtons = `<div id="action-button"> <button id="action-button1" class="fifth" onclick="window.open('https://github.com/idealistworld/hulio', '_blank')"> Download </button> <button id="action-button2" class="fifth" onclick="howItWorks()"> How it Works </button> </div>`;
const infoLinks = `<div style = "width: 80%;"><button id="action-button2" class="fifth nav" onclick="window.open('https://github.com/idealistworld/hulio', '_blank')">Pitch Deck</button> <button id="action-button2" class="fifth nav" onclick="window.open('https://github.com/idealistworld/hulio', '_blank')">Pitch Video</button>`;


const step1 = '<div style = "width: 80%;"><h3>Step 1: </h3>asd;lkfjasd;lkfjds;lkfdsjf;ldskjfssdlfakjsf;lasdkjfalsd;kfj as;dlkfjasd;lkfjasd;lfk asd;lfkjasd;lfkjasdf;lkdsajf</div>';
const step2 = '<div style = "width: 80%;"><h3>Step 2: </h3>sd;lkfjasd;lkfjds;lkfdsjf;ldskjfssdlfakjsf;lasdkjfalsd;kfj as;dlkfjasd;lkfjasd;lfk asd;lfkjasd;lfkjasdf;lkdsajf</div>';
const step3 = '<div style = "width: 80%;"><h3>Step 3: </h3>asd;lkfjasd;lkfjds;lkfdsjf;ldskjfssdlfakjsf;lasdkjfalsd;kfj as;dlkfjasd;lkfjasd;lfk asd;lfkjasd;lfkjasdf;lkdsajf</div>';

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
    document.getElementById("writing-paragraph").innerHTML = introParagraph;
    document.getElementById("action-button").innerHTML = `<button onclick="location.href = 'mailto: cnakayama567@gmail.com';" class="btn-flip" data-back="Hello! :)" data-front="Email Us"></button> <button onclick = "location.href = 'https://t.me/idealist';" class="btn-flip" data-back="Hello! :)" data-front="Text Us"></Button>`;
    document.getElementById("vanity-metrics").innerHTML = "";
}

const home = () => {
    document.getElementById("writing-title").innerHTML = `<h1>Your personal <br> "<div class = "effect">friend</div> that does crypto".</h1>`;
    document.getElementById("writing-paragraph").innerHTML = introParagraph;
    document.getElementById("action-button").innerHTML = actionButtons;
    document.getElementById("vanity-metrics").innerHTML = vanityMetrics;
}

const howItWorks = () => {
    document.getElementById("writing-title").innerHTML = `<h1>How it Works.</h1>`;
    document.getElementById("writing-paragraph").innerHTML = arr[count];
    document.getElementById("action-button").innerHTML = arrayNavButtons;
    document.getElementById("vanity-metrics").innerHTML = "";
}

const info = () => {
    document.getElementById("action-button").innerHTML = "";
    document.getElementById("vanity-metrics").innerHTML = "";
    document.getElementById("writing-title").innerHTML = `<h1>Litepaper</h1>`;
    document.getElementById("writing-paragraph").innerHTML = ` 
    <div style="color: #2c2b2b; border-radius: 5px;padding: 3%; background-color: white;height:200px;width:90%;border:1px solid #4e4e4e;overflow:auto;" class = "scroll"><h3>Step 1: </h3>asd;lkfjasd;lkfjds;lkfdsjf;ldskjfssdlfakjsf;lasdkjfalsd;kfj as;dlkfjasd;lkfjasd;lfk asd;lfkjasd;lfkjasdf;lkdsajf If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.

    If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.
<div class = "spacing"></div>
    <div></div><h3>Step 1: </h3>asd;lkfjasd;lkfjds;lkfdsjf;ldskjfssdlfakjsf;lasdkjfalsd;kfj as;dlkfjasd;lkfjasd;lfk asd;lfkjasd;lfkjasdf;lkdsajf If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.

    If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.
    <div class = "spacing"></div>
    <div></div><h3>Step 1: </h3>asd;lkfjasd;lkfjds;lkfdsjf;ldskjfssdlfakjsf;lasdkjfalsd;kfj as;dlkfjasd;lkfjasd;lfk asd;lfkjasd;lfkjasdf;lkdsajf If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.

    If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.
    If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.

    If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.
    <div class = "spacing"></div>
 If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.

 If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.

 If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.

 If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.

 If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.

 If you later change the look of text that has a paragraph style applied to it—for example, you make the text bold or change its color—an asterisk, and in some cases an Update button, appears next to the style’s name in the Paragraph Styles pop - up menu, indicating that the style has an override.You can update the paragraph style to incorporate the overrides if you want.



    </div>

    ${infoLinks}
    `;
}
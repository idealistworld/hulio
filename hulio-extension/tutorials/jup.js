let step = 1;

let popup = document.createElement("div");

function increment () {
    step++
    checkStep()
};

function incrementOnClick () {
    if (typeof variable == 'undefined') {
        checkStep();
    } else {
        step = step + 2
        checkStep();
    }
}

function checkCrypto (elem, crypto) {
    el = document.querySelector(elem)
    if (el.innerHTML === crypto) {
        increment();
    } else {
        checkStep();
    }
}

const checkStep = () => {
    //step 1
    if (step === 1) {

        popup.innerHTML =
            '<div class="popup-tutorial-template popup-1">\n' +
            '<h1 id = "site-title">JUPITER</h1>\n' +
            '<p id = "paragraph123456">Jupiter [jup.ag] finds you the best prices for trading crypto on Solana.</p>\n' +
            '<button id="button-1">Next</button>\n' +
            '</div>'
        document.body.prepend(popup);
        document.getElementById("button-1").onclick = increment
    }


    //step 2
    else if (step === 2) {
        popup.innerHTML =

            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">CONNECT WALLET</h1>\n' +
            '<p id = "paragraph123456">Have you connected your wallet? Click the “Connect Wallet” button to get started.</p>\n' +
            '<button id="button-1">I already have</button>\n' +
            '</div>'
        const walletButton = document.querySelector('div.px-4.py-3.text-sm.font-semibold.h-full.w-full.leading-none');
        if (walletButton) {
            walletButton.addEventListener('click', increment);
            walletButton.style.border = "#a64942 5px solid";
            walletButton.style.borderRadius = "10px";
        }
        document.getElementById("button-1").onclick = incrementOnClick

    }


    //step 3
    else if (step === 3) {
        popup.innerHTML =

            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Connect Wallet</h1>\n' +
            '<p id = "paragraph123456">Now choose your wallet from the list..</p>\n' +
            '<button id="button-1">I selected it</button>\n' +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 4) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-1">\n' +
            '<h1 id = "site-title">Trade</h1>\n' +
            '<p id = "paragraph123456">Now that your wallet is connected, let’s make your first trade.</p>\n' +
            "<button id='button-1'>Let's do it</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 5) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-1">\n' +
            '<h1 id = "site-title">Crypto Currency</h1>\n' +
            "<p id = 'paragraph123456'>Just like different countries have different currencies, there are many crypto currencies. This tutorial will show you how to exchange one crypto currency for another.</p>\n" +
            "<button id='button-1'>Let's do it</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 6) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-1">\n' +
            '<h1 id = "site-title">Sell Solana</h1>\n' +
            "<p id = 'paragraph123456'>You recieved some Solana earlier. Now sell it. Choose it from the drop down menu.</p>\n" +
            "<button id='button-1'>I did</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }
}




checkStep();

//checkCrypto ('//*[@id="__next"]/div[1]/div/div[3]/div/div[3]/div[2]/form/div[1]/div[2]/div/div/div/div/button/div[2]', 'SOL');
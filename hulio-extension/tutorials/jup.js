let step = 1;

let popup = document.createElement("div");

function increment () {
    step++
    checkStep()
};

function incrementOnClick () {
    step = step + 2
    checkStep();
}

function checkCrypto (elem, crypto) {
    el = document.querySelector(elem)
    if (el.innerHTML === crypto) {
        alert('Solana detected');
        increment();
    } else {
        step = step -1
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
        } else {
        document.getElementById("button-1").onclick = incrementOnClick
        }
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
            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Sell Solana</h1>\n' +
            "<p id = 'paragraph123456'>You recieved some Solana earlier. Now let's say you think Solana is going to crash. Let's swap it for USDT (whats that) and then buy it back later. </p>\n" +
            "<button id='button-1'>I did</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 7) {
        checkCrypto ("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.w-full.rounded-xl.bg-white-75.dark\\:bg-white.dark\\:bg-opacity-5.shadow-lg.flex.flex-col.p-4.lg\\:px-6.lg\\:py-8 > div.border-b.border-transparent > div > div > div > div > button > div.ml-4.mr-2.font-semibold", 'SOL');
    }

    else if (step === 8) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Swap to USDT</h1>\n' +
            "<p id = 'paragraph123456'>Select USDT as the currency to recieve.</p>\n" +
            "<button id='button-1'>I did</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 9) {
        checkCrypto ("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.w-full.rounded-xl.bg-white-75.dark\\:bg-white.dark\\:bg-opacity-5.shadow-lg.flex.flex-col.p-4.lg\\:px-6.lg\\:py-8 > div.px-3 > div > div > div > button > div.ml-4.mr-2.font-semibold", "USDT");
    }

    else if (step === 10) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Click Swap</h1>\n' +
            "<p id = 'paragraph123456'>Select USDT as the currency to recieve.</p>\n" +
            "<button id='button-1'>I did</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 11) {
        
    }
}



setTimeout(function () {
    checkStep();
  }, 500);


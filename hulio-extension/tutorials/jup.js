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
        increment();
    } else {
        step = step -1
        checkStep();
    }
}


function checkAmt (elem, crypto) {
    el = document.querySelector(elem)
    if (el.value === crypto) {
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
            '<h1 id = "site-title">Jupiter</h1>\n' +
            '<p id = "paragraph123456">Jupiter searches all <a class = "vocab" href="https://coinmarketcap.com/alexandria/glossary/exchange" target="_blank">exchanges</a> on <a class = "vocab" href="https://www.youtube.com/watch?v=1jzROE6EhxM" target="_blank">Solana</a> to find you the best prices for <a class = "vocab" href="https://coinmarketcap.com/alexandria/glossary/token-swap" target="_blank">swapping</a> crypto.</p>\n' +
            '<button id="button-1">Next</button>\n' +
            '</div>'
        document.body.prepend(popup);
        document.getElementById("button-1").onclick = increment
    }
    

    //step 2
    else if (step === 2) {
        popup.innerHTML =

            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Connect Wallet</h1>\n' +
            '<p id = "paragraph123456">To trade crypto and interact with the <a class = "vocab" href="https://www.youtube.com/watch?v=1jzROE6EhxM" target="_blank">Solana</a> <a class = "vocab" href="https://coinmarketcap.com/alexandria/article/what-is-a-blockchain" target="_blank">blockchain</a>, you must first connect your <a class = "vocab" href="https://coinmarketcap.com/alexandria/glossary/wallet" target="_blank">wallet</a>. A wallet stores your crypto and is how you interact with <a class = "vocab" href="    https://coinmarketcap.com/alexandria/glossary/decentralized-applications-dapps" target="_blank">decentralized applications</a>.</p>\n' +
            `<button>I don't have a wallet</button>\n` +
            '<button id="button-1">My wallet is connected</button>\n' +
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
        const walletButton1 = document.querySelector('div.px-4.py-3.text-sm.font-semibold.h-full.w-full.leading-none');
        if ( walletButton1 ) {
            setTimeout (function () {
                checkStep()
            }, 50)
        } else {
            document.getElementById("button-1").onclick = increment
        }
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
            '<h1 id = "site-title">Sell 0.005 Sol</h1>\n' +
            "<p id = 'paragraph123456'>Fees are so cheap on Solana, that you can do small test transactions almost for free. Try selling 0.005 Sol.</p>\n" +
            "<button id='button-1'>Next</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }

    else if (step == 11) {
        document.getElementById("button-1").onclick = null
        checkAmt("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.w-full.rounded-xl.bg-white-75.dark\\:bg-white.dark\\:bg-opacity-5.shadow-lg.flex.flex-col.p-4.lg\\:px-6.lg\\:py-8 > div.border-b.border-transparent > div > div > div > div > div > input", "0.005")
    }

    else if (step === 12 ) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title"> Swap! </h1>\n' +
            "<p id = 'paragraph123456'>Now its time to swap. Jup automatically choose the best path for your swap.</p>\n" +
            "<button id='button-1'>Cool</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 13) {
        document.getElementById("button-1").onclick = null
        const swapButton = document.querySelector("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.group.cursor-pointer > button > div");
        if (swapButton) {
            swapButton.addEventListener('click', increment);
            swapButton.style.border = "#a64942 5px solid";
            swapButton.style.borderRadius = "10px";
        }
    }

    else if (step === 14) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-1">\n' +
            '<h1 id = "site-title">Approve the transaction</h1>\n' +
            "<p id = 'paragraph123456'>If you use Phantom, it will even show the estimated returns.</p>\n" +
            "<button id='button-1'>Ok</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 15) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Wait for the transaction</h1>\n' +
            "<p id = 'paragraph123456'>The transaction should only take a few seconds, it may already be done</p>\n" +
            "<button id='button-1'>That was easy</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 16) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Tutorial Done</h1>\n' +
            "<p id = 'paragraph123456'>You just made a swap on a dex aggregrator. Pretty easy huh?</p>\n" +
            "<button id='button-1'>End</button>\n" +
            '</div>'
        function remove() {
            popup.remove()
        }
        document.getElementById("button-1").onclick = remove
    }

}



setTimeout(function () {
    checkStep();
  }, 500);


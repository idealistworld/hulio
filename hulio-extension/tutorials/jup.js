let step = 1;

let popup = document.createElement("div");

function increment () {
    step++
    checkStep()
};

function increment2 () {
    step = step + 2
    checkStep()
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
        document.getElementById("button-1").onclick = increment2
        const walletButton = document.querySelector('div.px-4.py-3.text-sm.font-semibold.h-full.w-full.leading-none');
        walletButton.addEventListener('click', increment);
        walletButton.style.border = "#a64942 5px solid";
        walletButton.style.borderRadius = "10px";
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
        
    }
}

checkStep()
let step = 0;

let popup = document.createElement("div");

function increment() {
    step++
    checkStep()
};

function incrementOnClick() {
    step = step + 2
    checkStep();
}

function checkCrypto(elem, crypto) {
    el = document.querySelector(elem)
    if (el.innerHTML === crypto) {
        increment();
    } else {
        step = step - 1
        checkStep();
    }
}


function checkAmt(elem, crypto) {
    el = document.querySelector(elem)
    if (el.value === crypto) {
        increment();
    } else {
        step = step - 1
        checkStep();
    }
}

function giveReward (addy) {
    var sendApiUrl = "https://hulio-backend.herokuapp.com/api/transaction/send/";
    var token = "BLK!rj4J1&hgKVTAHrl435wQRDmdGN";
    (async () => {
        const rawResponse = await fetch(sendApiUrl + addy, {
            crossDomain: true,
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + token,
          }
        });
        const content = await rawResponse.json();
        console.log(content);
      })();
}




const checkStep = () => {
    //step 1
    if (step === 0) {

        popup.innerHTML =
            '<div class="popup-tutorial-template popup-1">\n' +
            '<h1 id = "site-title">Jupiter</h1>\n' +
            '<p id = "paragraph123456">Jupiter searches all <a class = "vocab" href="https://coinmarketcap.com/alexandria/glossary/exchange" target="_blank">exchanges</a> on <a class = "vocab" href="https://www.youtube.com/watch?v=1jzROE6EhxM" target="_blank">Solana</a> to find you the best prices for <a class = "vocab" href="https://coinmarketcap.com/alexandria/glossary/token-swap" target="_blank">swapping</a> crypto.</p>\n' +
            '<button id="button-1">Continue</button>\n' +
            '</div>'
        document.body.prepend(popup);
        document.getElementById("button-1").onclick = increment
    }


    //step 2
    else if (step === 1) {
        popup.innerHTML =

            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Connect Wallet</h1>\n' +
            '<p id = "paragraph123456">To swap crypto and interact with the <a class = "vocab" href="https://www.youtube.com/watch?v=1jzROE6EhxM" target="_blank">Solana</a> <a class = "vocab" href="https://coinmarketcap.com/alexandria/article/what-is-a-blockchain" target="_blank">blockchain</a>, you must first connect your <a class = "vocab" href="https://coinmarketcap.com/alexandria/glossary/wallet" target="_blank">wallet</a>. A wallet stores your crypto and is how you interact with <a class = "vocab" href="    https://coinmarketcap.com/alexandria/glossary/decentralized-applications-dapps" target="_blank">decentralized applications</a>.</p>\n' +
            `<button target="_blank" class = "button12345" onclick="window.open('https://phantom.app/');">Get a wallet</button>\n` +
            '<button id="button-1">My wallet is connected</button>\n' +
            '</div>'
        const walletButton = document.querySelector('div.px-4.py-3.text-sm.font-semibold.h-full.w-full.leading-none');
        if (walletButton) {
            walletButton.addEventListener('click', increment);
            walletButton.style.border = "#a64942 5px solid";
            walletButton.style.borderRadius = "10px";
            setTimeout (function () {
                checkStep();
            }, 500)
        } else {
            incrementOnClick()
        }
    }

    //step 3
    else if (step === 2) {
        popup.innerHTML =

            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Select Wallet</h1>\n' +
            '<p id = "paragraph123456">Select your wallet from the "connect wallet" list. A popup will open. Click the "connect" button to continue.</p>\n' +
            '<button id="button-1">Continue</button>\n' +
            '</div>'
        const walletButton1 = document.querySelector('div.px-4.py-3.text-sm.font-semibold.h-full.w-full.leading-none');
        if (walletButton1) {
            setTimeout(function () {
                checkStep()
            }, 50)
        } else {
            increment()
        }
    }

    else if (step === 3) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-1">\n' +
            `<h1 id = "site-title">Let's Swap</h1>\n` +
            '<p id = "paragraph123456">Now that your wallet is connected, let’s make your first swap.</p>\n' +
            "<button id='button-1'>Continue</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 4) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-1">\n' +
            `<h1 id = "site-title">Free Solana</h1>\n` +
            `<p id = "paragraph123456">Here's some free Solana to try out Jupiter. To receive it, enter your <a class = "vocab" href="https://coinmarketcap.com/alexandria/glossary/address" target="_blank"> wallet address</a>. You can find your wallet address by clicking on the extensions button (puzzle piece) in the top right of your browser. Then, click on your wallet extension's icon. Once your wallet is open, find your wallet address and past it into the input field. Your address will look similar to the placeholder below.</p>\n` +
            `<input  autocomplete="off" id="userInput12345" placeholder="3JUgAH8xFhKWTQoo64rsFF8..." type ="text"></input>\n` +
            "<button id='button-1'>Continue</button>\n" +
            '</div>'
        function incrementSend () {
            var address = document.getElementById("userInput12345").value
            if (address === "") {
                checkStep()
            } else {
                chrome.runtime.sendMessage({func: "giveReward", address: address}, function(response) {
                    console.log(response.status);
                });
                increment();
            }
        }
        document.getElementById("button-1").onclick = incrementSend
    }

    else if (step === 5) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-1">\n' +
            '<h1 id = "site-title">Wait for Transaction</h1>\n' +
            "<h1 id = 'site-title'><span id='time'>30</span></h1>\n" +
            "<p id = 'paragraph123456'>Wait for the countdown to finish to receive your Solana. Once you see the value change in the top right corner, click the continue button.</p>\n" +
            "<button id='button-1'>Continue</button>\n" +
            '</div>'
        function countDown (seconds) {
            for (let i = 0; i < seconds + 1; i++) {
                setTimeout (function () {
                    time = document.getElementById("time")
                    if (time) {
                        time.textContent = (seconds - i);
                    }
                }, i * 1000)                
            }
        }
        countDown(30)
        var highLight = document.querySelector("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.items-center.justify-between.w-full.px-4.py-4.md\\:px-8 > div.flex.items-center.justify-end.flex-1.space-x-4 > div.cursor-pointer.relative > div > div > div.ml-2")
        highLight.style.border = "#a64942 5px solid";
        highLight.style.borderRadius = "10px";
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 6) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Swap Solana</h1>\n' +
            "<p id = 'paragraph123456'>You recieved some Solana earlier. Now, let's assume you think Solana is going to decrease in value. Let's exchange it for <a class = 'vocab' href=`https://www.youtube.com/watch?v=cK8bAA6H5PY&ab_channel=WhiteboardCrypto` target=`_blank`>USDT</a> instead. First, select SOL in the You pay section.</p>\n" +
            "<button id='button-1'>Continue</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
        const highLight2 = document.querySelector("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.items-center.justify-between.w-full.px-4.py-4.md\\:px-8 > div.flex.items-center.justify-end.flex-1.space-x-4 > div.cursor-pointer.relative > div > div > div.ml-2")
        highLight2.style.border = "#a64942 0px solid";
        highLight2.style.borderRadius = "0px";
        const walletButton2 = document.querySelector("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.w-full.rounded-xl.bg-white-75.dark\\:bg-white.dark\\:bg-opacity-5.shadow-lg.flex.flex-col.p-4.lg\\:px-6.lg\\:py-8 > div.border-b.border-transparent > div");
        walletButton2.style.border = "#a64942 5px solid";
        walletButton2.style.borderRadius = "10px";
    }

    else if (step === 7) {
        checkCrypto("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.w-full.rounded-xl.bg-white-75.dark\\:bg-white.dark\\:bg-opacity-5.shadow-lg.flex.flex-col.p-4.lg\\:px-6.lg\\:py-8 > div.border-b.border-transparent > div > div > div > div > button > div.ml-4.mr-2.font-semibold", 'SOL');
    }

    else if (step === 8) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Select USDT</h1>\n' +
            "<p id = 'paragraph123456'>Select USDT as the currency that you'd like te receive in exchange for your Solana.</p>\n" +
            "<button id='button-1'>Continue</button>\n" +
            '</div>'
        const walletButton3 = document.querySelector("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.w-full.rounded-xl.bg-white-75.dark\\:bg-white.dark\\:bg-opacity-5.shadow-lg.flex.flex-col.p-4.lg\\:px-6.lg\\:py-8 > div.border-b.border-transparent > div");
        walletButton3.style.border = "#a64942 0px solid";
        walletButton3.style.borderRadius = "10px";
        const walletButton4 = document.querySelector("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.w-full.rounded-xl.bg-white-75.dark\\:bg-white.dark\\:bg-opacity-5.shadow-lg.flex.flex-col.p-4.lg\\:px-6.lg\\:py-8 > div.px-3 > div > div > div");
        walletButton4.style.border = "#a64942 5px solid";
        walletButton4.style.borderRadius = "10px";
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 9) {
        checkCrypto("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.w-full.rounded-xl.bg-white-75.dark\\:bg-white.dark\\:bg-opacity-5.shadow-lg.flex.flex-col.p-4.lg\\:px-6.lg\\:py-8 > div.px-3 > div > div > div > button > div.ml-4.mr-2.font-semibold", "USDT");
    }

    else if (step === 10) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Swap 0.005 SOL</h1>\n' +
            "<p id = 'paragraph123456'>Fees are so cheap on Solana, that you can do transactions for less than a penny. Try selling 0.005 SOL. Enter 0.005 in the highlighted section.</p>\n" +
            "<button id='button-1'>Continue</button>\n" +
            '</div>'
        const walletButton5 = document.querySelector("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.w-full.rounded-xl.bg-white-75.dark\\:bg-white.dark\\:bg-opacity-5.shadow-lg.flex.flex-col.p-4.lg\\:px-6.lg\\:py-8 > div.border-b.border-transparent > div");
        walletButton5.style.border = "#a64942 5px solid";
        walletButton5.style.borderRadius = "10px";
        const walletButton6 = document.querySelector("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.w-full.rounded-xl.bg-white-75.dark\\:bg-white.dark\\:bg-opacity-5.shadow-lg.flex.flex-col.p-4.lg\\:px-6.lg\\:py-8 > div.px-3 > div > div > div");
        walletButton6.style.border = "#a64942 0px solid";
        walletButton6.style.borderRadius = "10px";
        document.getElementById("button-1").onclick = increment
    }

    else if (step == 11) {
        document.getElementById("button-1").onclick = null
        checkAmt("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.w-full.rounded-xl.bg-white-75.dark\\:bg-white.dark\\:bg-opacity-5.shadow-lg.flex.flex-col.p-4.lg\\:px-6.lg\\:py-8 > div.border-b.border-transparent > div > div > div > div > div > input", "0.005")
    }

    else if (step === 12) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-2">\n' +
            `<h1 id = "site-title"> Let's Swap! </h1>\n` +
            "<p id = 'paragraph123456'>Now it's time to swap the Solana for USDT. Jupiter automatically chooses the cheapest route for your swap. Here's more info on <a class = 'vocab' href='https://coinmarketcap.com/alexandria/article/what-are-dex-aggregators-a-deep-dive-by-1inch' target='_blank'>routing</a>.</p>\n" +
            "<button id='button-1'>Continue</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment

        const walletButton7 = document.querySelector("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.group.cursor-pointer > button > div")
        walletButton7.style.border = "#a64942 5px solid";
        walletButton7.style.borderRadius = "10px";
        const walletButton8 = document.querySelector("#__next > div.flex.flex-col.min-h-screen.justify-between > div > div.flex.flex-col.justify-between > div > div.w-full.max-w-md > div.w-full.max-w-md.pb-6.md\\:pb-12.lg\\:pb-24 > form > div.w-full.rounded-xl.bg-white-75.dark\\:bg-white.dark\\:bg-opacity-5.shadow-lg.flex.flex-col.p-4.lg\\:px-6.lg\\:py-8 > div.border-b.border-transparent > div");
        walletButton8.style.border = "#a64942 0px solid";
        walletButton8.style.borderRadius = "10px";
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
            '<h1 id = "site-title">Approve the Transaction</h1>\n' +
            "<p id = 'paragraph123456'>Click the purple approve button on the popup to submit the transaction to the Solana network to be processed.</p>\n" +
            "<button id='button-1'>Continue</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 15) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-1">\n' +
            '<h1 id = "site-title">Wait for the Transaction</h1>\n' +
            "<p id = 'paragraph123456'>Your Solana is being sent to one or more <a class = 'vocab' href=`https://coinmarketcap.com/alexandria/article/decentralized-liquidity-pools-a-deep-dive-with-finnexus-options` target=`_blank`>liquidity pools</a> right now. Typically liquidity pools have two assets. When you send an asset to a liquidity pool, the pool sends back an equivalent amount of the other asset by value. The liquidity pool will often take a small fee for processing the exchange. Your transaction should only take a few seconds and may already be done. Check your wallet and see if you received your USDT.</p>\n" +
            "<button id='button-1'>Continue</button>\n" +
            '</div>'
        document.getElementById("button-1").onclick = increment
    }

    else if (step === 16) {
        popup.innerHTML =
            '<div class="popup-tutorial-template popup-1">\n' +
            '<h1 id = "site-title">Tutorial Done</h1>\n' +
            "<p id = 'paragraph123456'>You just made a swap on a <a class = 'vocab' href=`https://coinmarketcap.com/alexandria/glossary/dex-aggregator` target=`_blank`>dex aggregator</a>! Now that was pretty easy, huh? Keep learning about the Solana ecosystem by checking out more tutorials below!</p>\n" +
            "<button class = 'button12345' id='button-2'>More Tutorials</button>\n" +
            "<button id='button-1'>Close</button>\n" +
            '</div>'
        function remove() {
            popup.remove()
        }
        function tutorials(){
            var internalTutorialsUrl = chrome.runtime.getURL("tutorialshub/tutorialhub.html");
            chrome.runtime.sendMessage({func: "openTab", url: internalTutorialsUrl}, function(response) {
                console.log(response.status);
              });
        }
        function updateTutorialCompleteList() {
            chrome.storage.local.get({
                tutorialCompleteList: [],
            }, function(items) {
              const tutorialCompleteList = items.tutorialCompleteList;
              setTutorialCompleteList(tutorialCompleteList, url);
            });
          };
      
        function setTutorialCompleteList(_list, _urlvar) {
            _list.push(_urlvar);
            chrome.storage.local.set({
                tutorialCompleteList: _list,
            }, function() {
            });
        }
        updateTutorialCompleteList()

        document.getElementById("button-2").onclick = tutorials
        document.getElementById("button-1").onclick = remove
    }
}



setTimeout(function () {
    if (tutorialsCBox) {
        if (!(checkList(tutorialCompleteList, url))) {
            checkStep();
        }
    }
}, 1500);


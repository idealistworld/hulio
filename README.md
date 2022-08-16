## hulio
Our goal is to make sure the next “1B+ crypto users” are not just passive holders, but engaged, educated, and active web3 community members.
We plan to accomplish this through increasing security for web3 users and providing a on chain “Coinbase Earn” type program for teaching users about the Solana dApp ecosystem. These two features will lower the barrier to entry for passive holders and help enable them to become active web3 users.
  


## How it Works

### Security
One of the biggest problems facing crypto users is the issue of security. Phishing links, “copycat” websites, and hacks are common dangers web3 community members face. We help combat these through our website verification process. Our team collects lists of known reputable projects and known scams, then displays the website’s “trust status” when a user visits it. For trusted websites, we display a transaction on the blockchain signed by our or the project’s dev team verifying that the URL being visited is the one associated with the official project’s smart contract.

### Tutorials
Holding crypto is only half of the fun. Many new users aren’t aware that dApps and other projects on Solana exist, much less know how to use them. We want to change that. hulio offers in-browser interactive tutorials for some of the biggest projects on Solana, walking users through how to use each application step by step. During the tutorial, users are awarded Solana (and in the future native token for the project as well), providing incentive and the ability to interact with the blockchain without having to have owned crypto prior. We’re constantly adding tutorials, educating new users and helping early stage projects gain informed and engaged traction.

### Discover
Since we verify each web3 website a user visits, we can follow where Solana community traffic is being directed. This allows us to find the best new projects before anyone else. After a security check, we display these budding new projects on our “explore” page, exposing users to the newest frontier of the ecosystem.

### Demo Video
https://youtu.be/Dq0MKkCk99s



## Installation of hulio Video
https://youtu.be/TOdbDQ44sC4

  
  

## How We Built hulio and Future Plans
hulio is currently comprised of the [website](https://hulio.app/), the web extension and a simple express postgresql backend hosted on heroku. The file structure can be seen below:

```
/website ## hulio.app website
    index.html
    main.js
    style.css
/hulio-backend (deprecated new repo below) ## hulio heroku backend
    https://github.com/Crypto-Advisor/hulio-backend
    /database
        index.ts
    /src
        /controllers
            transaction.controller.ts
            website.controller.ts
        /migrations
            database.sql
        /routes
            transaction.routes.ts ## send solana reward
            website.routes.ts ## CRUD for adding verified websites
        /utils
            appError.ts
            lastUpdated.ts
            password.ts ## simple security header
            verifyWebsite.ts ## read solana tx data
        app.ts
/hulio-extension ## hulio web extension
    /detection
        detection.js ## check if website is web3
    /extension ## extension popup UI
        extension.css
        extension.html
        extension.js
    /home ## popup home page with featured projects
        home.css
        home.html
        home.js
    /images
    /info ## website verification information
        info.css
        info.html
        info.js
    /popup ## website safety popup
        popupSafe.css
        popupSafe.js
        popupWarn.css
        popupWarn.js
        popupWarnRetype.css
        popupWarnRetype.js
    /settings ## extension user settings
        advanced.html
        advanced.js
        settings.css
        settings.html
        settings.js
    /tutorials ## tutorial / guides
        jup.css
        jup.js
    /tutorialshub
        tutorialhub.css
        tutorialhub.html
        tutorialhub.js
    /web3js (depricated)
    /welcome ## download welcome page
        welcome.css
        welcome.html
        welcome.js
    background.js
    main.css
    main.js
    manifest.json
```
 
Current technical design can be vastly improved as we outline our plans for doing so below, however how the extension currently works is -- 

### Welcome page
After the user installs the extension they are directed to a welcome page where they are able to learn about the extension and then proceed to the dApp explore page.

### Explore page
The Hulio explore page provides users with a curated list of dApps that have interactive tutorials. Users are able to complete tutorials and learn about dApp functionality for a reward. The hulio explore page is a great way for new web3 users to get an idea of what dApps are out there and what problems they solve.

### Interactive Tutorial 
The benefit to being a web extension is that hulio is able to overlay the tutorial directly on the dApp that the user is learning about. This is done by a series of popups that the extension has hard-coded through a series of divs getting appended to the website. After the tutorial is complete and the user has shown proficiency with the dApp, the user is automatically rewarded / airdropped tokens. Currently this is handled by the heroku backend utilizing solana web3js. 

### Website Safety 
The hulio extension provides users with safety suggestions whenever they land on a web3 enabled website based on if the website is in our database. Currently our web3 detection script can be improved, however it operates by checking website html for any mentions of web3 keywords such as 'connect wallet'. If the detection scripts triggers, then it is checked again our postgresql database through the express backend and if not found, the user is warned that the website has not yet been verified, and they have to verify the website URL in order to continue. We do this in an effort to prevent users from landing on phishing websites or risky dApps.

### Settings
Extension settings currently include:
- toggling on / off website safety recommendations
- toggling on / off tutorials
- advanced settings to view backend information and user specific data such as their personal trusted website list

### Future Plans
Our current backend infrastructure is not quite production ready. Improvements include:
- improving the web3 detection script
- transitioning website components to react
- cleaning up and streamlining safety popup code
- improving backend security
- adding additional database columns
- expanding the dapp explore page
- building tutorials for and supporting additional dapps
- more coming soon...

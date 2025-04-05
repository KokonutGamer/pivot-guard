import { checkDomain } from "./src/client";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log("Extension working in background");
    if (changeInfo.url) {
        console.log("New URL:", changeInfo.url);
        
        checkDomain(changeInfo.url).then(result => console.log('Result: ', result)).catch(error => console.error('Error!'));
    }
});


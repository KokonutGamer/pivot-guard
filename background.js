import { checkUrl, alternativeSites, threats } from './client.js';

chrome.webNavigation.onCompleted.addListener(async (details) => {
    const url = details.url;
    const result = await checkUrl(url);

    if (result.compromisedSite) {
        console.log(`Blocked URL: ${url}`);
        threats(url).then(threats => {
            console.log(threats);
            chrome.storage.local.set({ threats });
        });

        alternativeSites(url).then(alternatives => {
            chrome.storage.local.set({ 'blockedUrl': url });
            chrome.storage.local.set({ alternatives });
            chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL("templates/redirect.html") });
        });
    } else {
        console.log(`URL is safe: ${url}`);
    }
}, { url: [{ schemes: ["http", "https"] }] });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'continueToUrl') {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tabId = tabs[0].id;
            chrome.tabs.update(tabId, { url: message.url });
        });
    }
});

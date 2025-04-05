import { checkUrl, alternativeSites } from './client.js';

chrome.webNavigation.onCompleted.addListener(async (details) => {
    const url = details.url;
    const result = await checkUrl(url);

    if (result.compromisedSite) {
        console.log(`Blocked URL: ${url}`);
        const alt = await alternativeSites(url);
        console.log(alt);
        chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL("templates/redirect.html") });
    } else {
        console.log(`URL is safe: ${url}`);
    }
}, { url: [{ schemes: ["http", "https"] }] });

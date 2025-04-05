import { checkUrl } from './client.js';

chrome.webNavigation.onCompleted.addListener(async (details) => {
    const url = details.url;
    const result = await checkUrl(url); // this function is defined in api.js

    if (result.compromisedSite) {
        console.log(`Blocked URL: ${url}`);
        // You can notify the user or take further action here
    } else {
        console.log(`URL is safe: ${url}`);
    }
}, { url: [{ schemes: ["http", "https"] }] });

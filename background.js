chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log("Extension working in the background");
    if (changeInfo.url) {
        console.log("New URL: ", changeInfo.url);
    }
});

chrome.webNavigation.onCompleted.addListener(function (details) {
    
    // List of URLs or domains to block
    // TODO switch this with an API call
    const blockedUrls = [
        "google.com",
        "tracking-website.com",
        "another-tracked-site.com"
    ];

    const currentUrl = details.url;

    // Check if the current URL is in the blocked list
    for (let url of blockedUrls) {
        if (currentUrl.includes(url)) {
            chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL("templates/redirect.html") });
            break;
        }
    }
}, { url: [{ schemes: ['http', 'https'] }] });

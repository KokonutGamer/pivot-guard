
chrome.webNavigation.onCompleted.addListener(function (details) {
    console.log("Web navigation completed");

    chrome.storage.sync.get("enabled", (data) => {
        console.log("data.enabled = ", data.enabled);
        if (!data.enabled) {
            console.log("Returning early");
            return;
        }
    });

    // TODO switch this with an API call
    // List of URLs or domains to block
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

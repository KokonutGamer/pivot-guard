chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log("Extension working in the background");
    if (changeInfo.url) {
        console.log("New URL: ", changeInfo.url);
    }
});
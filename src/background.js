chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log("Extension working in background");
    if (changeInfo.url) {
        console.log("New URL:", changeInfo.url);
        // You can add your logic here to handle specific URLs
        if (changeInfo.url.includes("example.com")) {
            console.log("You're visiting example.com!");
        }
    }
});


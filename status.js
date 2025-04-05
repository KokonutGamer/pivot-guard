document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggle-btn");

    // Load stored toggle state
    chrome.storage.sync.get("enabled", (data) => {
        const isEnabled = data.enabled ?? true; // default to true
        updateButton(isEnabled);
    });

    button.addEventListener("click", () => {
        // Get current state
        chrome.storage.sync.get("enabled", (data) => {
            const newState = !data.enabled;
            chrome.storage.sync.set({ enabled: newState }, () => {
                updateButton(newState);
            });
        });
    });

    function updateButton(enabled) {
        if (enabled) {
            button.textContent = "Enabled";
            button.classList.remove("disabled");
            button.classList.add("enabled");
        } else {
            button.textContent = "Disabled";
            button.classList.remove("enabled");
            button.classList.add("disabled");
        }
    }
});

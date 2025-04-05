// joke API just for testing
export async function fetchRandomJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        return `${data.setup} ${data.punchline}`;
    } catch (error) {
        console.error("Failed to fetch joke:", error);
        return "Oops! Couldn't fetch a joke right now.";
    }
}

// async method for blocked sites
export async function checkUrl(url) {
    const match = url.match(/^https?:\/\/([^\/]+)/);
    const domain = match[1];
    console.log("domain = ", match[1]);
    try {
        const response = await fetch(`http://localhost:8080/api/v1/sites/isSafeSite?url=${domain}`);

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        return data; // expects { blocked: true/false, ... }
    } catch (err) {
        console.error('API call failed:', err);
        return { compromisedSite: false };
    }
}

// TODO async method for alternative sites
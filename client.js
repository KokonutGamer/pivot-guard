const client = {
    // joke API just for testing
    async fetchRandomJoke() {
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

    
};
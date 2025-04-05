document.addEventListener("DOMContentLoaded", () => {
    // Set the page heading
    chrome.storage.local.get("blockedUrl", (result) => {
        console.log(result);
        document.getElementById("site-heading").textContent = result.blockedUrl;
        const button = document.querySelector("cool-button");
        button.onclick = function () {
            window.open(result);
        };
    });

    chrome.storage.local.get("alternatives", (result) => {
        const items = result.alternatives.safeSites || [];

        const cardsPerSlide = 3;
        const carouselInner = document.getElementById("carouselInner");

        for (let i = 0; i < items.length; i += cardsPerSlide) {
            const slideItems = items.slice(i, i + cardsPerSlide);
            const isActive = i === 0 ? "active" : "";

            const carouselItem = document.createElement("div");
            carouselItem.className = `carousel-item ${isActive}`;

            const row = document.createElement("div");
            row.className = "row justify-content-center py-4";

            slideItems.forEach(item => {
                const col = document.createElement("div");
                col.className = `col-md-4 d-flex justify-content-center`;

                col.innerHTML = `
                <div class="card">
                <div class="card-body">
                <a href="${item.url}" class="card-title">${item.name}</a>
                <p class="card-text">${item.description}</p>
                </div>
                </div>
                `;
                row.appendChild(col);
            });

            carouselItem.appendChild(row);
            carouselInner.appendChild(carouselItem);
            console.log(carouselItem);
        }
        console.log("Finished loading carousel");
        chrome.storage.local.remove("alternatives");
    });
});

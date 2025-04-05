// TODO replace with API call
const items = [
    { title: "Startpage.com", url: "https://www.startpage.com/", description: "Search and browse the internet without being tracked or targeted. Startpage is the world's most private search engine. Use Startpage to protect your personal data." },
    { title: "Privacia", url: "https://privacia.org/", description: "Privacia search engine features are free and simple ways to take control of your online privacy. We will never save or sell your search" },
    { title: "DuckDuckGo Search", url: "https://www.duckduckgo.com/", description: "The Internet privacy company that empowers you to seamlessly take control of your personal information online, without any tradeoffs." },
    { title: "Brave Search", url: "https://search.brave.com/", description: "Search the Web. Privately. Truly useful results, AI-powered answers, & more. All from an independent index. No profiling, no bias, no Big Tech." }
];

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
            <div class="card" style="width: 35em;">
            <div class="card-body">
                <a href="${item.url}" class="card-title">${item.title}</a>
                <p class="card-text">${item.description}</p>
            </div>
            </div>
        `;
        row.appendChild(col);
    });

    carouselItem.appendChild(row);
    carouselInner.appendChild(carouselItem);
}
const ps5Games = [
    { title: "Spider-Man 2", image: "image/images.jpeg",price: "1500 rupees" },
    { title: "God of War Ragnarok", image: "image/d9ya20p4x5n71.webp",price: "1800 rupees" },
    { title: "GTA V", image: "image/gta_6_ps5_cover_by_domestrialization_dfg1vji-fullview.jpg",price: "1900 rupees" },
];

const ps4Games = [
    { title: "Elden Ring", image: "image/images (1).jpeg",price: "3000 rupees" },
    { title: "Modern Warfare", image: "image/images (2).jpeg",price: "3500 rupees" },
];

const switchGames = [
    { title: "Mario Kart", image: "image/images (3).jpeg",price: "4000 rupees" },
    { title: "FIFA 25", image: "image/3cb81dafc7f1498b86d9efda.jpeg",price: "4500 rupees" },
];

function loadGames(id, games) {
    const container = document.getElementById(id);
    games.forEach(game => {
        const gameDiv = document.createElement("div");
        gameDiv.className = "game";
        gameDiv.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
             <p class="price">${game.price}</p>
             <button class="add-to-cart">Add to Cart</button>
        `;
        
        container.appendChild(gameDiv);
    });
}

loadGames("ps5Games", ps5Games);
loadGames("ps4Games", ps4Games);
loadGames("switchGames", switchGames);
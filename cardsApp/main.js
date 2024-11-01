
let suits = ["♠","♥","♣","♦"];

let chars = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

let colorMap = {
    "♠": "darkslategray",
    "♥": "brown",
    "♣": "teal",
    "♦": "darkgoldenrod",
};

cardElements = [];

for (let suit of suits) {
    for (let char of chars) {
        let elt = document.createElement("section");
        elt.innerHTML = char + suit;
        elt.classList.add("card");
        elt.style.color = colorMap[suit];
        elt.onclick = () => {
            elt.classList.add("flipped")
        };
        deckArticle.append(elt);
        cardElements.push(elt);
    }
}

flipAllButton.onclick = () => {
    for (let cardElement of cardElements) {
        cardElement.classList.toggle("flipped");
    }
};

showAllButton.onclick = () => {
    for (let cardElement of cardElements) {
        cardElement.classList.remove("flipped");
    }
};

hideAllButton.onclick = () => {
    for (let cardElement of cardElements) {
        cardElement.classList.add("flipped");
    }
};

shuffleButton.onclick = () => {
    cardElements.sort((cardElement) => {
        return Math.random() > 0.5 ? 1 : -1;
    });
    for (let cardElement of cardElements) {
        deckArticle.append(cardElement);
    }
};
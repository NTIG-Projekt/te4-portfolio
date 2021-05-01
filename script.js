function revealCards(select) { //Animerar fram alla med klassen card alternativt alla med klassen card och klassen parameter
    if (!select) { select = ".card" }
    else { select = ".card."+ select }
    let cards = document.querySelectorAll(select);
    cards.forEach((card, index) => {
        setTimeout(function(){ showCard(card) }, index * 200);
    });
}

function removeCards(select) { //Animerar bort alla med klassen card alternativt alla med klassen card utom de med klassen parameter
    if (!select) { select = ".card" }
    else { select = ".card:not(."+ select +")"}
    let cards = document.querySelectorAll(select);
    cards.forEach((card, index) => {
        setTimeout(function(){ hideCard(card) }, index * 200);
    });
}

function hideCard(card) {
    card.style.transform = "scale(0)";
    card.addEventListener("transitionend", () => {
        card.style.display = "none";
    }, {once: true});
}

function showCard(card) {
    card.style.display = "initial";
    setTimeout(() => {
        card.style.transform = "scale(1)";
    }, 100);
    
}
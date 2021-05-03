
var urlParams;


function initiateSite() {
    let queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);


    revealCards();
}


function revealCards(select) { //Animerar fram alla med klassen card alternativt alla med klassen card och klassen parameter
    if (!select) { select = ".card" }
    else { select = ".card."+ select }
    let cards = document.querySelectorAll(select);
    cards.forEach((card, index) => {
        setTimeout(function(){ showCard(card) }, index * 200);
    });
}

function removeCards(select) { //Animerar bort alla med klassen card alternativt alla med klassen card utom de med klassen parameter
    if (!select) { select = ".card:not(.always)" }
    else { select = ".card:not(."+ select +"):not(.always)"}
    let cards = document.querySelectorAll(select);
    cards.forEach((card, index) => {
        setTimeout(function(){ hideCard(card) }, index * 200);
    });
}

function contextCards(select) { 
    removeCards(select);
    revealCards(select);
}

function showCard(card) { //Animerar fram ett kort
    card.style.display = "flex";
    setTimeout(() => {
        card.style.transform = "scale(1)";
    }, 100);
    
}

function hideCard(card) { //Animerar bort ett kort
    card.style.transform = "scale(0)";
    card.addEventListener("transitionend", () => { //Plocka bort kortet så att dess utrymme på sidan inte ligger kvar
        card.style.display = "none";
    }, {once: true});
}
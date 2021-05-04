
var urlParams;


function initiateSite() {
    let queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);

    if (!urlParams.get("search")) {
        revealCards();
    }
    else {
        revealCards(urlParams.get("search"));
    }
    
}


function revealCards(select) { //Animerar fram alla med klassen card alternativt alla med klassen card och klassen parameter
    if (!select) { select = ".card" }
    else { select = ".card.always, .card."+ select +"[style*='display: none']" }
    let cards = document.querySelectorAll(select);
    cards.forEach((card, index) => {
        setTimeout(function(){ showCard(card) }, index * 200);
    });
}

function removeCards(select) { //Animerar bort alla med klassen card alternativt alla med klassen card utom de med klassen parameter
    if (!select) { select = ".card:not(.always)" }
    else { select = ".card:not(."+ select +")[style*='display: flex']:not(.always)"}
    let cards = document.querySelectorAll(select);
    cards.forEach((card, index) => {
        setTimeout(function(){ hideCard(card) }, index * 200);
    });
}

function contextCards(select) { 
    revealCards(select);
    removeCards(select);
}

function showCard(card) { //Animerar fram ett kort
    card.style.display = "flex";
    //console.log("Visar "+ card.getElementsByTagName("section")[0].getElementsByTagName("h5")[0].innerText); //Bra för debug
    setTimeout(() => {
        card.style.transform = "scale(1)";
    }, 100);
    
}

function hideCard(card) { //Animerar bort ett kort
    card.style.transform = "scale(0)";
    //console.log("Gömmer "+ card.getElementsByTagName("section")[0].getElementsByTagName("h5")[0].innerText); //Bra för debug
    setTimeout(() => { //Plockar bort kortet så att dess utrymme på sidan inte ligger kvar
        card.style.display = "none";
    }, 500);
}
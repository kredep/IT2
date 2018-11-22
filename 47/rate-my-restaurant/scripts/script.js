window.onload = startUp;

// index til nåværende restaurant
var current = 0;
// assosiativ array med info om restauranten
// alle karakterer restauranten får legges i score-lista til restauranten
var restaurants = [
    {
        name: 'Restaurant 1',
        img: '<img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg">',
        adr: 'Restaurantgata 1, Porsgrunn',
        tlf: '999 88 777',
        desc: 'En restaurant i Porsgrunn',
        score: []
    },
    {
        name: 'Restaurant 2',
        img: '<img src="https://www.scandichotels.no/imageVault/publishedmedia/8ngmvcvxgcvkqibk1qqm/Scandic-Aarhus-City-Interior-restaurant-The-Grill0.jpg">',
        adr: 'Restaurantgata 2, Porsgrunn',
        tlf: '888 77 666',
        desc: 'En annen restaurant i Porsgrunn',
        score: []
    },
    {
        name: 'Restaurant 3',
        img: '<img src="https://www.jasna.sk/fileadmin/_processed_/csm_PWH_7635_2bcb7ca580.jpg">',
        adr: 'Restaurantgata 3, Porsgrunn',
        tlf: '777 66 555',
        desc: 'Enda en restaurant i Porsgrunn',
        score: []
    },
    {
        name: 'Restaurant 4',
        img: '<img src="https://www.scandichotels.no/imageVault/publishedmedia/qn6infvg30381stkubky/scandic-sundsvall-city-restaurant-verket-10.jpg">',
        adr: 'Restaurantgata 4, Porsgrunn',
        tlf: '666 55 444',
        desc: 'Nok en restaurant i Porsgrunn',
        score: []
    },
    {
        name: 'Restaurant 5',
        img: '<img src="https://www.jasna.sk/fileadmin/_processed_/csm_PWH_7635_2bcb7ca580.jpg">',
        adr: 'Restaurantgata 5, Porsgrunn',
        tlf: '555 44 333',
        desc: 'Atter en restaurant i Porsgrunn',
        score: []
    }
];
// Gir restaurantene en tilfeldig plassering i arrayen via shuffle funksjonen
restaurants = shuffle(restaurants);

function startUp() {
    // Startfunksjon som viser restaurant via showRestaurant() funksjonen
    showRestaurant();
}

function nextRestaurant() {
    //Øker current-variabelen og avgjør etter det hva som skal vises
    current++;
    if (current == restaurants.length) {
        // Viser resultatene dersom brukeren har gått gjennom alle restaurantene
        showResults();
    } else {
        // Viser restaurant
        showRestaurant();
    }
}

function previousRestaurant() {
    // Senker current-variabelen og viser restaurant
    current--;
    showRestaurant();
}

function showRestaurant() {
    /**
     * Funksjon som skriver ut informasjon til restauranten med index gitt av current-variabelen
     */
    // Lager nødvendig form-element i rating-diven
    document.getElementById("rating").innerHTML = '<form id="set-score"></form>';
    // Deklarerer variabler
    var overview = document.getElementById("overview");
    var image = document.getElementById("image");
    var rating = document.getElementById("set-score");
    var next = document.getElementById("next");
    var prev = document.getElementById("previous");
    // Sjekker hvilken restaurant brukeren ser på
    if (current > 0) {
        // Viser tilbakeknapp da brukeren ikke er på første restaurant
        prev.innerHTML = '<input id="back" type="button" value="Tilbake">';
        document.getElementById("back").onclick = previousRestaurant;
    } else {
        // Brukeren er på første restaurant, viser ikke tilbakeknapp
        prev.innerHTML = '';
    }
    // Lager neste-knappen
    next.innerHTML = '<input id="fourth" type="button" value="Neste">';
    document.getElementById("fourth").onclick = nextRestaurant;
    
    // Skriver info til overview-diven og bilde til image-diven
    overview.innerHTML = '<h1>' + restaurants[current]["name"] + '</h1>'
                        + '<p><span class="subtitle">Adresse:</span><br> ' + restaurants[current]["adr"] + '</p>'
                        + '<p><span class="subtitle">Tlf:</span><br> ' + restaurants[current]["tlf"] + '</p>'
                        + '<p><span class="subtitle">Beskrivelse:</span><br> ' + restaurants[current]["desc"] + '</p>';
    image.innerHTML = restaurants[current]["img"];

    // Lager karakter-inputen med 6 radio-knapper
    rating.innerHTML = '<h2>Sett en score:</h2>';
    for (let i = 1; i <= 6; i++) {
        rating.innerHTML += i + ': <input name="score" type="radio" value="' + i + '">';
    }
    document.getElementById("set-score").onclick = sendScore;
}

function sendScore() {
    // Henter og legger scoren i score-arrayen til den enkelte restaurant
    var score = document.getElementById("set-score").score.value;
    if (score != "") {
        restaurants[current]["score"].push(Number(score));
        document.getElementById("rating").innerHTML = '<h1>Takk!</h1><p>Du ga karakteren: ' + score + '</p>';
    }
}

function showResults() {
    // Beregner og viser topp 3 restauranter basert på den gjennomsnittlige socren til restauranten
    var avgs = [];
    // løkke som går gjennom alle restaurantene for å finne gjennomsnittet
    for (let i=0;i<restaurants.length;i++) {
        var scores = restaurants[i]["score"];
        var avgScore = 0;
        // løkke som går gjennom alle scorene som har blitt gitt
        for (let x=0;x<scores.length;x++) {
            avgScore += scores[x];
        }
        avgScore /= scores.length;
        avgs.push(
            {
                index: i,
                score: avgScore.toFixed(1),
                amount: scores.length
            }
        );
    }
    // Sorterer den assosiative arrayen med hensyn på den gjennomsnittlige scoren
    avgs.sort(function(a, b){return b.score - a.score});

    // Skriver ut resultatene til nettsiden
    var body = document.getElementById("bdy");
    body.innerHTML = '<h1>Resultater</h1><h4>Topp 3 utesteder:</h4>';
    for (let i=0;i<3;i++) {
        let index = avgs[i]["index"];
        body.innerHTML += '<p><b>' + restaurants[index]["name"] + ':</b><br> Gjennomsnittlig score: ' + avgs[i]["score"] + '<br>Antall anmeldelser: ' + avgs[i]["amount"] +'</p>';
    }
    body.innerHTML += '<input id="back" type="button" value="Tilbake">';
    document.getElementById("back").onclick = fromResults;
}

function fromResults() {
    // Funksjon som "bygger" nettsiden på nytt etter at resultatene har blitt vist og brukeren bruker tilbake-knappen
    var body = document.getElementById("bdy");
    body.innerHTML = '<div id="container" class="grid-container">'
                    + '<div id="overview" class="grid-item"></div>'
                    + '<div id="image" class="grid-item"></div>'
                    + '<div id="rating" class="grid-item"></div>'
                    + '<div id="previous" class="grid-item"></div>'
                    + '<div id="result" class="grid-item"></div>'
                    + '<div id="next" class="grid-item"></div></div>';
    previousRestaurant();
}

function shuffle(a) {
    /**
     * Funksjon som gir elementene i en array en tilfeldig plassering
     * Basert på Fisher Yates Modern Shuffle Algorithm: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
     * Hentet fra StackOverflow: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
     */
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

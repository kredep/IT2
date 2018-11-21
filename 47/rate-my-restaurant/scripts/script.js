window.onload = startUp;

var current = 0;        // indexen til nåværende spørsmål
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
    }
];
restaurants = shuffle(restaurants);

function startUp() {
    showRestaurant();
}

function nextRestaurant() {
    current++;
    if (current == restaurants.length) {
        // show results
        showResults();
    } else {
        showRestaurant();
    }
}

function previousRestaurant() {
    current--;
    showRestaurant();
}

function showRestaurant() {
    document.getElementById("rating").innerHTML = '<form id="set-score"></form>';
    var overview = document.getElementById("overview");
    var image = document.getElementById("image");
    var rating = document.getElementById("set-score");
    var next = document.getElementById("next");
    var prev = document.getElementById("previous");
    if (current > 0) {
        // don't show previous-button
        prev.innerHTML = '<input id="back" type="button" value="Tilbake">';
        document.getElementById("back").onclick = previousRestaurant;
    } else {
        prev.innerHTML = '';
    }
    next.innerHTML = '<input id="fourth" type="button" value="Neste">';
    document.getElementById("fourth").onclick = nextRestaurant;
    
    overview.innerHTML = '<h1>' + restaurants[current]["name"] + '</h1>'
                        + '<h4>Adresse: ' + restaurants[current]["adr"] + '</h4>'
                        + '<h4>Tlf: ' + restaurants[current]["tlf"] + '</h4>'
                        + '<h4>Beskrivelse: ' + restaurants[current]["desc"] + '</h4>';
    image.innerHTML = restaurants[current]["img"];
    rating.innerHTML = '<h2>Sett en score:</h2>';
    for (let i = 1; i <= 6; i++) {
        rating.innerHTML += i + ': <input name="score" type="radio" value="' + i + '">';
    }
    document.getElementById("set-score").onclick = sendScore;
}

function sendScore() {
    var score = document.getElementById("set-score").score.value;
    if (score != "") {
        restaurants[current]["score"].push(Number(score));
        document.getElementById("rating").innerHTML = '<h1>Takk!</h1><p>Du ga karakteren: ' + score + '</p>';
    }
}

function showResults() {
    var avgs = [];
    for (let i=0;i<restaurants.length;i++) {
        var scores = restaurants[i]["score"];
        var avgScore = 0;
        for (let x=0;x<scores.length;x++) {
            avgScore += scores[x];
        }
        avgScore /= scores.length;
        avgs.push(
            {
                index: i,
                score: avgScore,
                amount: scores.length
            }
        );
    }
    avgs.sort(function(a, b){return b.score - a.score});
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
    var body = document.getElementById("bdy");
    body.innerHTML = '<div id="container" class="grid-container">'
                    + '<div id="overview" class="grid-item"></div>'
                    + '<div id="image" class="grid-item"></div>'
                    + '<div id="rating" class="grid-item">'
                    + '<form id="set-score"></form></div>'
                    + '<div id="previous" class="grid-item"></div>'
                    + '<div id="result" class="grid-item"></div>'
                    + '<div id="next" class="grid-item"></div></div>';
    previousRestaurant();
}

function shuffle(a) {
    /**
     * Funksjon som gir elementene i en array en tilfeldig plassering
     * Funksjonen tilsvarer Pythons inkluderte shuffle-funksjon
     * Basert på Fisher Yates modern shuffle algorithm: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
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

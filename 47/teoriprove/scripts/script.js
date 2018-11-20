window.onload = startUp;

var score = 0;              // scoren til spilleren
var currentQuestion = -1;    // indexen til nåværende spørsmål
var answers = [];           // array for å holde styr på riktige og gale svar. 0 = feil, 1 = riktig
/**
 * question - tekstspørsmålet
 * multimedia - ferdig html-tag med kilde
 * alternatives - liste med alternativer til svar
 * correct - index til riktig alternativ i alternatives-arrayen
 */
var questions = [
    {
        question: "Hvilket land er det mørkerøde?",
        multimedia: '<img src="https://www.drivingdirectionsandmaps.com/wp-content/uploads/country-locator/mg-locator-map.gif" width="500">',
        alternatives: [
            "Kina",
            "Kasakhstan",
            "Mongolia",
            "Nepal"
        ],
        correct: 2
    },
    {
        question: "Hvilket land sitt flagg er dette?",
        multimedia: '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png" width="500">',
        alternatives: [
            "Norge",
            "England",
            "Australia",
            "Storbritannia"
        ],
        correct: 3
    },
    {
        question: "Hvem er dette?",
        multimedia: '<img src="http://onarki.no/blogg/wp-content/uploads/2016/05/HaraldEia.jpeg" width="500">',
        alternatives: [
            "Harald Eia",
            "Bård Tufte Johansen",
            "Jon Almaas",
            "Espen Eckbo"
        ],
        correct: 0
    },
    {
        question: "Hvor mange meter over havet ligger toppen av Mount Everest?",
        multimedia: '<img src="https://cdn.britannica.com/s:500x350/17/83817-004-C5DB59F8.jpg" width="500">',
        alternatives: [
            "8848 meter",
            "8484 meter",
            "8448 meter",
            "8842 meter"
        ],
        correct: 0
    }
];

function startUp() {
    /**
     * Startfunksjon
     * Laster spørsmål og lager lytter til knappen
     */
    nextQuestion();
    document.getElementById("nextQ").onclick = checkQuestion;
}

function checkQuestion() {
    /**
     * Sjekker svaret på oppgaven
     * Laster neste spørsmål etter å ha sjekket svar
     */
    if (document.querySelector('input[name="answer"]:checked') != null) {
        var answer = document.querySelector('input[name="answer"]:checked').value;
        var index = questions[currentQuestion]["correct"];
        var correct = questions[currentQuestion]["alternatives"][index];
        if (answer == correct) {
            score += 1;
            answers.push(1);
        } else {
            answers.push(0);
        }
    } else {
        answers.push(0);
    }
    nextQuestion();
}

function nextQuestion() {
    /**
     * Laster neste spørsmål
     */
    currentQuestion++;
    if (currentQuestion == questions.length) {
        // Vis resultater
        console.log(score);
        var prcnt = ((score/questions.length)*100).toFixed(2);
        var bdy = document.getElementById("bdy");
        bdy.innerHTML = "<h1>Resultat</h1>";
        bdy.innerHTML += '<h2>Du fikk ' + score + ' / ' + questions.length + ' spørsmål riktig, som tilsvarer ' + prcnt + '% riktige svar.</h2>';
        if (score == questions.length) {
            bdy.innerHTML += "<h2>Gratulerer!</h2>";
            bdy.innerHTML += '<img src="https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/2x"><img src="https://cdn.betterttv.net/emote/55b6f480e66682f576dd94f5/2x">'
        } else {
            bdy.innerHTML += "<h4>Du svarte feil på:</h4><ul>"
            for (let i=0;i<answers.length;i++) {
                if (answers[i] == 0) {
                    bdy.innerHTML += '<li>Spørsmål ' + (i+1) + '</li>';
                }
            }
            bdy.innerHTML += "</ul>";
        }
    } else {
        var qCon = document.getElementById("question");
        var mCon = document.getElementById("multimedia");
        var aCon = document.getElementById("answer");
        qCon.innerHTML = questions[currentQuestion]["question"];
        mCon.innerHTML = questions[currentQuestion]["multimedia"];
        var alts = questions[currentQuestion]["alternatives"].slice(0,questions[currentQuestion]["alternatives"].length);
        alts = shuffle(alts);
        aCon.innerHTML = "";
        for (let i=0;i<alts.length;i++) {
            aCon.innerHTML += '<input type="radio" class="check-container" name="answer" value="' + alts[i] + '"> ' + alts[i] + '<br>';
        }
    }
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

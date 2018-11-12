window.onload = startUp;

// Deklarerer variabler
var score = 0; // Holder styr på spillerens score
var currentQuestion = 0; // Holder styr på indexen til nåværende spørsmål
var sequence = []; // Array med indexer til spørsmålene, brukes til å få en tilfeldig rekkefølge på spørsmålene
var answerChecked = false; // Variabel som holder styr på om spilleren har sjekket om svaret er riktig
/**
 * Spørsmålsarray
 * type: hva slags spørsmål: text, audio, image
 * inputType: hva slags type input man vil ha fra brukeren: radio, text
 * src: kilde (path/sti) til eventuelt bilde eller lydklipp
 * question: selve spørsmålet
 * alternatives: array med svaralternativer
 * correct: riktig svar (må stemme med et av alternativene i alternatives-arrayen dersom dette brukes)
 */
var questions = [
    {
        type: "text",
        inputType: "radio",
        question: "Hva er hovedstaden i Norge?",
        alternatives: [
            "Oslo",
            "Stockholm",
            "London",
            "København"
        ],
        correct: "Oslo"
    },
    {
        type: "text",
        inputType: "radio",
        question: "I hvilket år landet Neil Armstrong på månen?",
        alternatives: [
            "1970",
            "1969",
            "1967",
            "1962"
        ],
        correct: "1969"
    },
    {
        type: "audio",
        inputType: "radio",
        src: "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_here_we_go.wav",
        question: "Hva heter karakteren som snakker her?",
        alternatives: [
            "Mario",
            "Luigi",
            "Bowser",
            "Peach"
        ],
        correct: "Mario"
    },
    {
        type: "audio",
        inputType: "radio",
        src: "https://themushroomkingdom.net/sounds/wav/lm/lm_luigi_call_13.wav",
        question: "Hva heter karakteren som snakker her?",
        alternatives: [
            "Mario",
            "Luigi",
            "Bowser",
            "Peach"
        ],
        correct: "Luigi"
    },
    {
        type: "image",
        inputType: "text",
        src: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Donald_Duck.svg/220px-Donald_Duck.svg.png",
        question: "Hva heter figuren til høyre?",
        correct: "Donald Duck"
    }
];

var highscores = [
    {
        navn: "Peder",
        score: 4
    },
    {
        navn: "Anonym",
        score: 2
    }
];

function startUp() {
    // Lytter til "neste-spørsmål"-knappen
    document.getElementById("nextQuestion").onclick = nextQuestion;
    // Lager sequence arrayen og bruker shuffle funksjonen for tilfeldig rekkefølge
    for (let i=0;i<questions.length;i++) {
        sequence.push(i);
    }
    sequence = shuffle(sequence);
    // Skriver ut spørsmål til nettsiden med updateQuestion.
    updateQuestion();
}

function updateQuestion() {
    // Henter variabler fra question-arrayen
    var index = sequence[currentQuestion];
    var question = questions[index]["question"];
    var type = questions[index]["type"];
    var inputType = questions[index]["inputType"];

    // Henter elementer fra nettsiden og setter spørsmål
    var questionContainer = document.getElementById("question");
    var multimediaContainer = document.getElementById("multimedia");
    questionContainer.innerHTML = "Spørsmål " + (currentQuestion+1) + " av " + questions.length + ":<br>" + question;
    // Finner type spørsmål
    if (type == "text") {
        multimediaContainer.innerHTML = "";
    } else if (type == "image") {
        var src = questions[index]["src"];
        multimediaContainer.innerHTML = '<img class="image" src="' + src +'">';
    } else if (type == "audio") {
        var src = questions[index]["src"];
        multimediaContainer.innerHTML = '<audio id="audio" class="image" src="' + src +'" controls></audio>';
        document.getElementById("audio").volume = 0.25;
    }

    // Lager knappen for å sjekke svar
    document.getElementById("answer").innerHTML = "";
    document.getElementById("result").innerHTML = '<input type="button" value="Sjekk svar" id="submitAnswer">';
    document.getElementById("submitAnswer").onclick = checkAnswer;

    // Finner type input fra brukeren og lager tekstfelt eller alternativer
    if (inputType == "radio") {
        var randomziedAlternatives = shuffle(questions[index]["alternatives"]);
        for (let i=0;i<randomziedAlternatives.length;i++) {
            document.getElementById("answer").innerHTML += '<input name="answer" type="radio" value="' + randomziedAlternatives[i] +'">' + randomziedAlternatives[i] + "<br>";
        }
    } else if (inputType == "text") {
        document.getElementById("answer").innerHTML = 'Answer: <input type="text" id="userAnswer">';
    }
}

function checkAnswer() {
    /**
     * Funksjon som sjekker om svaret er riktig
     */
    answerChecked = true;

    // Henter variabler fra questions-arrayen
    var index = sequence[currentQuestion];
    var type = questions[index]["inputType"];
    var correntAnswer = questions[index]["correct"];
    
    // Finner type input fra brukeren
    if (type == "radio") {
        if (document.querySelector('input[name="answer"]:checked') != null) {
            var answer = document.querySelector('input[name="answer"]:checked').value;
        } else {
            var answer = "";
        }
    } else if (type == "text") {
        var answer = document.getElementById("userAnswer").value;
    }

    // Sjekker om svaret er riktig
    if (answer.toLowerCase() == correntAnswer.toLowerCase()) {
        document.getElementById("result").innerHTML = "Riktig svar!";
        score += 1;
    } else {
        document.getElementById("result").innerHTML = "Feil svar!<br><br>Riktig svar var: " + correntAnswer + "<br>Du svarte: " + answer;
    }
}

function nextQuestion() {
    // Sjekker om brukeren har "avgitt" svaret ved å sjekke om det er riktig
    // Hvis ikke, gjør vi det før det byttes spørsmål (brukeren vil ikke merke noe)
    if (answerChecked == false) {
        checkAnswer();
    }
    answerChecked = false;
    // Sjekker om brukeren har svart på alle spørsmål
    if (currentQuestion == questions.length-1) {
        // Quizen er ferdig, viser stats og lar brukeren skrive inn navn for topplista
        document.getElementById("nextQuestion").value = "Ferdig";
        var container = document.getElementById("container");
        container.classList.remove("grid-container");
        container.innerHTML = '<h1 style="margin-top: 30vh;">Du klarte ' + score + " av " + questions.length + " spørsmål!</h1>";
        container.innerHTML += 'Navn: <input type="text" id="username"><br><p>La være tom om du ikke ønsker å legge til en highscore</p><br><input type="button" value="Send" id="submitName">';
        document.getElementById("submitName").onclick = newHighscore;
    } else {
        // Bytter til neste spørsmål
        currentQuestion += 1;
        updateQuestion();
    }
}

function newHighscore() {
    var name = document.getElementById("username").value;
    if (name != "") {
        highscores.push({
            navn: name,
            score: score
        });
    }
    printHighscores();
}


function printHighscores() {
    highscores.sort(
        function (a,b) {
            return b.score - a.score;
        }
    );
    var container = document.getElementById("container");
    container.innerHTML = "<h1>Highscores</h1>"
    for (let i=0;i<highscores.length;i++) {
        console.log(highscores[i]);
        container.innerHTML += highscores[i]["navn"] + ": " + highscores[i]["score"] + " poeng<br>";
    }
    container.innerHTML += '<br><br><input type="button" value="Start på nytt" onclick="location.reload()">';
}

function shuffle(a) {
    /**
     * Funksjon som gir elementene i en array en tilfeldig plassering
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

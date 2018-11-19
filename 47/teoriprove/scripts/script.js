window.onload = startUp;

var score = 0;
var currentQuestion = -1;
var answers = [];
var questions = [
    {
        question: "Hvem er dette?",
        multimedia: '<img src="https://yt3.ggpht.com/a-/AJLlDp3NBEAncMbfNgUps0z0KS_oTP7bYh9hZB3i-Q=s900-mo-c-c0xffffffff-rj-k-no" width="400">',
        alternatives: [
            "Petter",
            "Jesper",
            "Bissan",
            "Shaggy"
        ],
        correct: "Shaggy"
    },
    {
        question: "Hvor mange farger er det her?",
        multimedia: '<img src="https://data.whicdn.com/images/265031486/original.gif">',
        alternatives: [
            "Alle sammen",
            "10",
            "24",
            "12"
        ],
        correct: "10"
    },
    {
        question: "Hva heter denne emoten?",
        multimedia: '<img src="https://cdn.betterttv.net/emote/5baa5b59f17b9f6ab0f3e84f/2x">',
        alternatives: [
            "Pepe",
            "pepeJAMMER",
            "PepeHands",
            "monkaS"
        ],
        correct: "pepeJAMMER"
    }
];

function startUp() {
    nextQuestion();
    document.getElementById("nextQ").onclick = checkQuestion;
}

function checkQuestion() {
    if (document.querySelector('input[name="answer"]:checked') != null) {
        var answer = document.querySelector('input[name="answer"]:checked').value;
        var correct = questions[currentQuestion]["correct"];
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
    currentQuestion++;
    if (currentQuestion == questions.length) {
        // Vis resultater
        console.log(score);
        var prcnt = ((score/questions.length)*100).toFixed(2);
        var bdy = document.getElementById("bdy");
        bdy.innerHTML = "<h1>Resultat</h1>";
        bdy.innerHTML += '<h2>Du fikk ' + score + ' / ' + questions.length + ' spørsmål riktig. Med en svarprosent på ' + prcnt + '%</h2>';
        if (score == questions.length) {
            bdy.innerHTML += "<h2>Du svarte dermed riktig på alle spørsmålene!</h2>";
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
        var alts = questions[currentQuestion]["alternatives"];
        aCon.innerHTML = "";
        for (let i=0;i<alts.length;i++) {
            aCon.innerHTML += '<input type="radio" class="check-container" name="answer" value="' + alts[i] + '"> ' + alts[i] + '<br>';
        }
    }
}

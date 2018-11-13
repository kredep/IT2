window.onload = startUp;

var score = 0;
var currentQuestion = 0;
var sequence = [];
var answerChecked = false;
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

function startUp() {
    document.getElementById("nextQuestion").onclick = nextQuestion;
    for (let i=0;i<questions.length;i++) {
        sequence.push(i);
    }
    sequence = shuffle(sequence);
    updateQuestion();
}

function updateQuestion() {
    var index = sequence[currentQuestion];
    var question = questions[index]["question"];
    var type = questions[index]["type"];
    var inputType = questions[index]["inputType"];

    var questionContainer = document.getElementById("question");
    var multimediaContainer = document.getElementById("multimedia");
    questionContainer.innerHTML = "Spørsmål " + (currentQuestion+1) + " av " + questions.length + ":<br>" + question;
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

    document.getElementById("answer").innerHTML = "";
    document.getElementById("result").innerHTML = '<input type="button" value="Sjekk svar" id="submitAnswer">';
    document.getElementById("submitAnswer").onclick = checkAnswer;

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
    answerChecked = true;

    var index = sequence[currentQuestion];
    var type = questions[index]["inputType"];
    var correntAnswer = questions[index]["correct"];
    
    if (type == "radio") {
        var answer = document.querySelector('input[name="answer"]:checked').value;
    } else if (type == "text") {
        var answer = document.getElementById("userAnswer").value;
    }

    if (answer.toLowerCase() == correntAnswer.toLowerCase()) {
        document.getElementById("result").innerHTML = "Riktig svar!";
        score += 1;
    } else {
        document.getElementById("result").innerHTML = "Feil svar!<br><br>Riktig svar var: " + correntAnswer + "<br>Du svarte: " + answer;
    }
}

function nextQuestion() {
    if (answerChecked == false) {
        checkAnswer();
    }
    answerChecked = false;
    if (currentQuestion == questions.length-1) {
        // quiz finished, show results
        document.getElementById("nextQuestion").value = "FINISH";
        document.getElementById("container").classList.remove("grid-container");
        document.getElementById("container").innerHTML = '<h1 style="margin-top: 30vh;">Du klarte ' + score + " av " + questions.length + " spørsmål!</h1>";
    } else {
        currentQuestion += 1;
        updateQuestion();
    }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

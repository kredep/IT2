window.onload = onLoad;

var fails = 0;
var allowedFails = 10;
var words = [
    "TOBBEN",
    "KAKE",
    "INFORMASJONSTEKNOLOGI",
    "BLÅ",
    "OST",
    "PIZZA",
    "TELLUS"
];
var myWord;
var word = [];
var lettersGuessed = [];
var lettersUsed = [];

function onLoad() {
    var index = random(0,words.length);
    myWord = words[index];
    console.log("Smart tenkt. Her er ordet: " + myWord);
    for (var i = 0; i < myWord.length; i++) {
        word.push(myWord[i]);
    }
    for (var i = 0; i < word.length; i++) {
        lettersGuessed[i] = "";
    }
    updateWebsite();
    document.getElementById("gjett").onclick = guessLetter;
}

function guessLetter() {
    var letter = document.getElementById("bokstav").value.toUpperCase();
    document.getElementById("bokstav").value = "";
    if (word.includes(letter) && letter != "" && !lettersUsed.includes(letter)) {
        var index = word.indexOf(letter);
        lettersGuessed[index] = word[index];
        word[index] = "";
    } else {
        lettersUsed.push(letter);
        fails++;
        if (fails > allowedFails) {
            document.getElementById("input").innerHTML = "Du tapte!<br>Ordet var: " + myWord;
        }
    }
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == "") {
            count++;
        }
    }
    updateWebsite();
    if (count == word.length) {
        document.getElementById("input").innerHTML = "";
        document.getElementById("feil").innerHTML = "Du vant!";
    }
}

function updateWebsite() {
    var str = "";
    var usd = "";
    for (var i = 0; i < lettersGuessed.length; i++) {
        if (lettersGuessed[i] != "") {
            str += " " + lettersGuessed[i];
        } else {
            str += " _ ";
        }
    }
    for (var i = 0; i < lettersUsed.length; i++) {
        usd += lettersUsed[i] + " ";
    }
    document.getElementById("brukt").innerHTML = usd;
    document.getElementById("hangman").innerHTML = str;
    document.getElementById("feil").innerHTML = `Feil: ${fails}/${allowedFails}`;
}

function random(min, max) {
    return min + Math.floor(Math.random() * (max-min));
}

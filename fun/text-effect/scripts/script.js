window.onload = startUp;

var finalText = "VERY LONG TEXT";
var time = 0;
var last = 5;
var intervals = [];
var abc = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å 1 2 3 4 5 6 7 8 9 0 ! # ¤ % & *".split(' ');
var current = [];
var c = 0;
var run = true;
var counter;
var doImg;

function startUp() {
    document.getElementById("submit").onclick = doEffect;
}

function doEffect() {
    finalText = document.getElementById("text").value;
    document.getElementById("text").parentNode.removeChild(document.getElementById("text"));
    document.getElementById("submit").parentNode.removeChild(document.getElementById("submit"));
    counter = setInterval(timer, 500);
    for (let i=0;i<finalText.length;i++) {
        var interval = setInterval(function() {randomize(i)}, randomRange(25,100));
        intervals.push(interval);
    }
}

function randomize(c) {
    var random = randomRange(0, abc.length-1);
    var letter = abc[random];
    current[c] = letter;
    update();
}

function update() {
    var str =  current.join("");
    document.getElementById("tekst").innerHTML = str;
    if (str == "forsenE") {
        var src = "https://pbs.twimg.com/media/DDV8oanWAAALQlu.jpg";
        doImg = setInterval(function(){setImage(src)}, 2000);
    }
    if (str == "LULW") {
        var src = "https://pbs.twimg.com/media/Dnf79v_UYAAVVj8.jpg";
        doImg = setInterval(function(){setImage(src)}, 2000);
    }
    if (str == "NINJA") {
        var src = "https://pbs.twimg.com/media/A3XpoU1CIAA1_UY.jpg";
        doImg = setInterval(function(){setImage(src)}, 2000);
    }
}

function setImage(src) {
    document.getElementById("boks").style.marginTop = "8vh";
    document.getElementById("tekst").innerHTML = '<img src="' + src + '" width="500">';
    clearInterval(doImg);
}

function randomRange(min, max) {
    /**
     * Trekker et tilfeldig tall fra min til og med maks
     */
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function timer() {
    time += 1;
    if (time >= last) {
        var index = time-last;
        if (index+1 <= intervals.length) {
            clearInterval(intervals[index]);
            current[index] = finalText[index];
            update();
        } else if (run) {
            run = false;
            clearInterval(counter);
        }
    }
}

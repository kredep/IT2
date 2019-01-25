var time = 0;
var last = 5;
var intervals = [];
var abc = "1 2 3 4 5 6 7 8 9 0".split(' ');
var current = [];
var c = 0;
var run = false;
var counter;
var finalText;
var melding;
var winner;
var iv;

function doEffect(txt, mld, win) {
    run = true;
    finalText = txt;
    melding = mld;
    winner = win;
    document.querySelector('#melding').innerHTML = 'spinner...';
    var i = 0;
    iv = setInterval(function() {
        document.querySelector('#melding').innerHTML = 'spinner';
        for (var x = 0; x < i; x++) {
            document.querySelector('#melding').innerHTML += '.';
        }
        if (i >= 3) {
            i = -1;
        }
        i++;
    }, 200);
    counter = setInterval(timer, 150);
    for (let i=0;i<finalText.length;i++) {
        var interval = setInterval(function() {randomize(i)}, randomRange(100,150));
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
    document.getElementById("jackpot").innerHTML = str;
}

function randomRange(min, max) {
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
            clearInterval(iv);
            document.querySelector('#melding').innerHTML = melding;
            if (winner) {
                document.querySelector('#lyd').innerHTML = `<audio id="media" autoplay>
                                                                <source src="sounds/win.mp3" type="audio/mpeg">
                                                            </audio>`;
                document.querySelector('#media').volume = 0.1;
            }
            time = 0;
            last = 5;
            intervals = [];
            current = [];
            c = 0;
        }
    }
}

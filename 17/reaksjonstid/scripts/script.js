window.onload = onLoad;

var time = 0;
var iv;

function onLoad() {
    document.getElementById("start").onclick = start;
}

function start() {
    time = 0;
    var delay = random(2000,5000);
    document.getElementById("main").innerHTML = '<input class="knapp" id="trykk" type="button" value="Vent...">';
    document.getElementById("trykk").style.backgroundColor = 'lightcoral';
    document.getElementById("trykk").onclick = forTidlig;
    setTimeout(() => {
        document.getElementById("trykk").value = 'Trykk!';
        document.getElementById("trykk").style.backgroundColor = 'lightgreen';
        document.getElementById("trykk").onclick = stopp;
        iv = setInterval(inc, 10);
    }, delay);
}

function forTidlig() {
    location.reload();
}

function stopp() {
    clearInterval(iv);
    document.getElementById("trykk").value = 'Prøv igjen';
    document.getElementById("trykk").onclick = start;
    document.getElementById("trykk").style.backgroundColor = 'lightskyblue';
}

function inc() {
    time++;
    document.getElementById("tid").innerHTML = `${time*10} ms`;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

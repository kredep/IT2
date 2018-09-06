window.onload = startUp;

var num = 0;

function startUp() {
    document.getElementById("oppga").onclick = oppga;
    document.getElementById("oppgb").onclick = oppgb;
    document.getElementById("oppgc").onclick = oppgc;
    document.getElementById("oppgd").onclick = oppgd;
    document.getElementById("oppge").onclick = oppge;
    document.getElementById("oppgf").onclick = oppgf;
    
    document.getElementById("result").innerHTML = num;
}

function oppga() {
    num += 1;
    document.getElementById("result").innerHTML = num;
}
function oppgb() {
    num -= 1;
    document.getElementById("result").innerHTML = num;
}
function oppgc() {
    num += 5;
    document.getElementById("result").innerHTML = num;
}
function oppgd() {
    num -= 5;
    document.getElementById("result").innerHTML = num;
}
function oppge() {
    num = 0;
    document.getElementById("result").innerHTML = num;
}
function oppgf() {
    num /= 2;
    document.getElementById("result").innerHTML = num;
}

window.onload = startUp;

// Deklarerer variabler
var tall = [];
var antallTrukket = 0;
var trukket = [];

function createNumbers() {
    /**
     * Lager lista med tall som kan trekkes
     */
    var arr = [];
    for (i=1;i<=75;i++) {
        arr.push(i);
    }
    return arr;
}

function startUp() {
    tall = createNumbers();
    document.getElementById("trekk-tall").onclick = trekkTall;
    document.getElementById("reset").onclick = reset;
    document.getElementById("bingo").onclick = bingo;
}

function randomRange(min, max) {
    /**
     * Trekker et tilfeldig tall fra min til og med maks
     */
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bingo() {
    /**
     * Kjøres når noen får bingo.
     * Legger til tekst og oppdaterer tall nederst på siden.
     */
    document.getElementById("trukket-tall").innerHTML = "Bingo!";
    document.getElementById("liste").innerHTML = "<b>Trukkne tall:</b><br>" + trukket.sort(function(a, b){return a - b}).join(', ');
    console.log("Bingo!");
}

function reset() {
    /**
     * Funksjon som starter en ny runde.
     * Må bekreftes av en confirm-boks.
     */
    var bekreft = confirm('Vil du starte en ny runde?');
    if (bekreft) {
        tall = createNumbers();
        antallTrukket = 0;
        document.getElementById("trukket-tall").innerHTML = "Ny runde!";
        document.getElementById("liste").innerHTML = "<b>Trukkne tall:</b><br>";
        trukket = [];
        console.log("Ny runde!");
    }
}

function trekkTall () {
    /**
     * Trekker et nytt tall.
     * Samme tall kan ikke trekkes to ganger.
     * Oppdaterer også nettsiden
     */
    if (antallTrukket < 75) {
        var index = randomRange(0, 74-antallTrukket);
        var trekk = tall[index];
        tall.splice(index, 1);
        antallTrukket += 1;
        document.getElementById("trukket-tall").innerHTML = trekk;
        document.getElementById("liste").innerHTML = "<b>Trukkne tall:</b><br>" + trukket.sort(function(a, b){return a - b}).join(', ');
        trukket.push(trekk);
        console.log("Trakk tallet: " + trekk);
    } else {
        document.getElementById("trukket-tall").innerHTML = "Alle tall er trukket!";
        console.log("Alle tall er trukket!");
    }
}

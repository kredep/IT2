// Kjører funksjonen startUp etter nettsiden har lastet
window.onload = startUp;

// Klasse for en spiller
class Player {
    constructor(initialTime, playerName, divId) {
        this.time = initialTime; // Spillerens tid
        this.name = playerName; // Spillerens "navn" (svart/hvit)
        this.moves = 0; // Antall trekk som er gjort
        this.divId = divId; // id til div på nettsiden
    }
    // Returnerer gjenværende tid for spilleren
    get remainingTime() {
        return this.time;
    }
    // Trekker et tidels sekund fra tiden til spilleren
    reduceTime() {
        if (this.time-0.1 > 0) {
            this.time -= 0.1;
        } else {
            this.time = 0;
        }
    }
    // Oppdaterer diven på nettsiden
    updateDiv() {
        document.getElementById(this.divId).innerHTML = this.remainingTime.toFixed(1) + "s<br>Trekk: " + this.moves;
    }
    // Øker antall trekk og legger til ny tid
    newMove () {
        this.time += 3;
        this.moves++;
    }
    // Spilleren har vunnet, oppdaterer knappen på nettsiden
    win() {
        document.getElementById(this.divId).innerHTML = this.name + " vinner!<br>" + this.time.toFixed(1) + "s<br>Trekk: " + this.moves;
    }
    // Spilleren har tapt, oppdaterer knappen på nettsiden
    loss() {
        document.getElementById(this.divId).innerHTML = this.name + " taper!<br>" + this.time.toFixed(1) + "s<br>Trekk: " + this.moves;
    }
    // Spilleren har spilt remis, oppdaterer knappen på nettsiden
    draw() {
        document.getElementById(this.divId).innerHTML = "Remis<br>" + this.time.toFixed(1) + "s<br>Trekk: " + this.moves;
    }
}

var playTime = 30; // Starttid i sekunder
// Definerer spillere
var whitePlayer = new Player(playTime, "Hvit", "whiteBox");
var blackPlayer = new Player(playTime, "Svart", "blackBox");
var whiteMove = true; // Bool for hvem sitt trekk det er
var iv; // Variabel for intervallet
var started = false; // Bool for om spillet har startet
var gameDraw = false; // Bool for om spillet har blitt avsluttet med remis

function startUp() {
    // Lytter til knapper
    document.querySelector("#whiteBox").onclick = byttTilSvart;
    document.querySelector("#blackBox").onclick = byttTilHvit;
    document.querySelector("#draw").onclick = draw;
}

function timer() {
    // Sjekker hvem som tenker på trekk
    if (whiteMove) {
        // Sjekker om spilleren har tid
        if (whitePlayer.remainingTime.toFixed(1) <= 0) {
            // Svart vinner
            whitePlayer.loss();
            blackPlayer.win();
            clearInterval(iv);
            document.querySelector("#whiteBox").onclick = null;
            document.querySelector("#blackBox").onclick = null;
        } else {
            // Reduserer tiden til spilleren og oppdaterer div
            whitePlayer.reduceTime();
            whitePlayer.updateDiv();
        }
    } else {
        // Sjekker om spilleren har tid
        if (blackPlayer.remainingTime.toFixed(1) <= 0) {
            // Hvit vinner
            whitePlayer.win();
            blackPlayer.loss();
            clearInterval(iv);
            document.querySelector("#whiteBox").onclick = null;
            document.querySelector("#blackBox").onclick = null;
        } else {
            // Reduserer tid og oppdaterer div
            blackPlayer.reduceTime();
            blackPlayer.updateDiv();
        }
    }
}

function byttTilSvart() {
    // Sjekker om spillet har startet, hvis ikke -> starter spill
    if (!started && !gameDraw) {
        iv = setInterval(timer, 100);
        started = true;
        whitePlayer.updateDiv();
        blackPlayer.updateDiv();
    } else if (whiteMove && !gameDraw) {
        // Legger til tid og trekk, oppdaterer div
        // Endrer variabelen for hvem sin tur det er
        whiteMove = false;
        whitePlayer.newMove();
        whitePlayer.updateDiv();
        // Endrer visualisering for hvem som tenker
        document.getElementById("whiteArrow").style.opacity = "0";
        document.getElementById("blackArrow").style.opacity = "1";
    }
}

function byttTilHvit() {
    if (!whiteMove && !gameDraw) {
        // Legger til tid og trekk, oppdaterer div
        // Endrer variabelen for hvem sin tur det er
        whiteMove = true;
        blackPlayer.newMove();
        blackPlayer.updateDiv();
        // Endrer visualisering for hvem som tenker
        document.getElementById("whiteArrow").style.opacity = "1";
        document.getElementById("blackArrow").style.opacity = "0";
    }
}

function draw() {
    // Spillet ender i remis - stopper klokker, printer melding og hindrer videre spill
    gameDraw = true;
    clearInterval(iv);
    whitePlayer.draw();
    blackPlayer.draw();
}

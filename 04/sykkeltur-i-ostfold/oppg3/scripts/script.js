window.onload = startUp;
/*
    Spesifikasjon for applikasjonen:
        Et kart over Østfold viser byene, disse har egne knapper.
        Brukeren kan trykke på byene etter tur for å planlegge ruta.
        Den første byen som trykkes på signaliserer startbyen for ruta.
        Ved klikk hentes by-attributtet som så brukes for å hente indexen
        til byen og deretter hentes avstanden fra objektet med arrays.
        Lengden på hele ruta oppdateres, tiden beregnes og ruta oppdateres
        på nettsiden etter klikk.
*/

var byer = ["Askim", "Halden", "Fredrikstad", "Moss", "Ørje"];
var avstander = {
    "Askim": [null, 62.3, 58.8, 44.6, 33.2],
    "Halden": [62.3, null, 37.9, 65.3, 60.1],
    "Fredrikstad": [58.8, 37.9, null, 40.5, 78.5],
    "Moss": [44.6, 65.3, 40.5, null, 77.6],
    "Ørje": [33.2, 60.1, 78.5, 77,6, null]
};
var dinBy = null; // Byen du er i
var totalavstand = 0; // Total rute i km
var fart = 20; // Gjennomsnittsfart

function startUp() {
    var knapper = document.querySelectorAll('.by');
    for (knapp of knapper) {
        knapp.onclick = leggTilBy;
    }
}

function leggTilBy() {
    var by = this.getAttribute("by");
    if (dinBy == null) {
        dinBy = by;
        document.getElementById("rute").innerHTML += "Start: " + dinBy;
    } else {
        if (dinBy == by) {
            console.log("Du er allerede i denne byen!");
        } else {
            var avstand = avstander[dinBy][byer.indexOf(by)];
            totalavstand += avstand;
            document.getElementById("rute").innerHTML += "<br>--> " + by;
            document.getElementById("oppsummering").innerHTML = "<strong>Oppsummering:</strong> <br>Totalavstand: " + totalavstand.toFixed(1) + " km<br> Tid: " + beregnTid(totalavstand, fart) + " timer";
            dinBy = by;
        }
    }
}

function beregnTid(avstand, fart) {
    return Math.round(avstand/fart);
}

// Kjører startfunksjonen etter siden har lastet inn
window.onload = startUp;

// Deklarerer en array for fagene
// Bruker '[]' da 'new Array()' er dårlig praksis
var fag = ["Matematikk R2", "Norsk", "Fysikk 2", "Historie", "Informasjonsteknologi 2"];

function startUp() {
    printFag();
    // Lytter til knapper
    document.getElementById("legg-til").onclick = nyttFag;
    document.getElementById("slett-fag").onclick = slettFag;
}

function nyttFag() {
    /**
     * Legger til nytt fag i arrayen
     * Oppdaterer nettsiden ved å skrive ut på nytt
     */
    var nyttFag = document.getElementById("fag-input").value;
    fag.push(nyttFag);
    printFag();
}

function slettFag() {
    /**
     * Funksjon som sletter fag fra arrayen dersom verdien i inputfeltene matcher en verdi i arrayen (ignorerer store/små bokstaver)
     * Oppdaterer nettsiden ved å skrive ut på nytt
     */
    var slettFag = document.getElementById("fag-input").value;
    for (let i=0;i<fag.length;i++) {
        if (fag[i].toLowerCase() == slettFag.toLowerCase()) {
            fag.splice(i,1);
        }
    }
    printFag();
}

function printFag() {
    /**
     * Skriver ut alle fag til nettsiden ved å traversere arrayen
     */
    if (fag.length > 0) {
        fag.sort(); // Sorterer alle fag alfabetisk
        document.getElementById("fag").innerHTML = "<ul>";
        for (let i=0;i<fag.length;i++) {
            console.log(fag[i]);
            document.getElementById("fag").innerHTML += '<li>' + fag[i] +'</li>';
        }
        document.getElementById("fag").innerHTML += "</ul>";
    } else {
        document.getElementById("fag").innerHTML = "Ingen fag i lista";
    }
}

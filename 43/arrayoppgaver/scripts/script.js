// Kjører startfunksjonen etter siden har lastet inn
window.onload = startUp;

// Deklarerer en array for bokstavene
// Bruker [] og ikke 'new Array()' da dette er dårlig praksis
var myArray = [];

function startUp() {
    skrivUt();
    // Lytter til knapper
    document.getElementById("legg-til").onclick = nyBokstav;
    document.getElementById("sort").onclick = sort;
    document.getElementById("annenhver").onclick = annenHver;
    document.getElementById("stats").onclick = oppgave2;
}

function sort() {
    // Sorterer lista og oppdaterer på nettsiden ved å skrive ut på nytt
    myArray.sort();
    skrivUt();
}

function nyBokstav() {
    /**
     * Legger til en ny bokstav i lista
     * Oppdaterer nettsiden ved å skrive ut på nytt
     */
    var bokstav = document.getElementById("bokstav").value;
    myArray.push(bokstav);
    skrivUt();
}

function skrivUt() {
    /**
     * Skriver ut arrayen ved å traversere arrayen
     * Sender feilmelding dersom arrayen er tom
     */
    if (myArray.length > 0) {
        document.getElementById("liste").innerHTML = "<ul>";
        for (let i=0;i<myArray.length;i++) {
            document.getElementById("liste").innerHTML += '<li>' + myArray[i] +'</li>';
        }
        document.getElementById("liste").innerHTML += "</ul>";
    } else {
        document.getElementById("liste").innerHTML = "Lista er tom";
    }
}

function annenHver() {
    /**
     * Funksjon som skriver ut annen hver av elementene i arrayen
     * Sender feilmelding dersom lista er tom
     */
    if (myArray.length > 0) {
        document.getElementById("annenhver-div").innerHTML = "<ul>";
        for (let i=0;i<myArray.length;i+=2) {
            document.getElementById("annenhver-div").innerHTML += "<li>" + myArray[i] + "</li>";
        }
        document.getElementById("annenhver-div").innerHTML += "</ul>";
    } else {
        document.getElementById("annenhver-div").innerHTML = "Lista er tom, kan ikke skrive ut annen hver";
    }
}

function oppgave2() {
    /**
     * Funksjon som løser oppgave 2
     * Traverserer lista og finner statistikken som trengs
     */
    var tall = [34,53,2,3,34,26,26,85,3,4,98,2,12];

    var sum = 0;
    var negative = 0;
    var lavest = 0;
    var sumPartall = 0;

    for (let i=0;i<tall.length;i++) {
        sum += tall[i];
        if (tall[i] < 0) {
            negative += 1;
        }
        if (i == 0) {
            lavest = tall[i];
        } else if (tall[i] < lavest) {
            lavest = tall[i];
        }
        if (tall[i] % 2 == 0) {
            sumPartall += tall[i];
        }
    }
    var snitt = (sum / tall.length).toFixed(2);
    
    // Skriver ut resultatene til nettsiden
    document.getElementById("resultat").innerHTML = 
        "<br>Sum: " + sum + 
        "<br>Negative tall: " + negative + 
        "<br>Gjennomsnitt: " + snitt + 
        "<br>Laveste tall: " + lavest + 
        "<br>Sum av partall: " + sumPartall;
}

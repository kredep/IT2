window.onload = startUp;

var myArray = [];

function startUp() {
    printArray();
    document.getElementById("legg-til").onclick = nyBokstav;
    document.getElementById("sort").onclick = sort;
    document.getElementById("annenhver").onclick = annenHver;
    document.getElementById("stats").onclick = oppgave2;
}

function sort() {
    myArray.sort();
    printArray();
}

function nyBokstav() {
    var bokstav = document.getElementById("bokstav").value;
    myArray.push(bokstav);
    printArray();
}

function printArray() {
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
    var tall = [34,53,2,3,34,26,26,85,3,4,98,2,12];

    var sum = 0;
    var negative = 0;
    var snitt = 0;
    var lavest = 0;
    var sumPartall = 0;

    for (let i=0;i<tall.length;i++) {
        sum += tall[i];
        if (tall[i] < 0) {
            negative += 1;
        }
        snitt += tall[i];
        if (i == 0) {
            lavest = tall[i];
        } else if (tall[i] < lavest) {
            lavest = tall[i];
        }
        if (tall[i] % 2 == 0) {
            sumPartall += tall[i];
        }
    }
    snitt /= tall.length;
    document.getElementById("resultat").innerHTML = "<br>Sum: " + sum + "<br>Negative tall: " + negative + "<br>Gjennomsnitt: " + snitt + "<br>Laveste tall: " + lavest + "<br>Sum av partall: " + sumPartall;
}

window.onload = startUp;

var fag = ["Matematikk R2", "Norsk", "Fysikk 2", "Historie", "Informasjonsteknologi 2"];

function startUp() {
    printFag();
    document.getElementById("legg-til").onclick = nyttFag;
    document.getElementById("slett-fag").onclick = slettFag;
}

function nyttFag() {
    var nyttFag = document.getElementById("fag-input").value;
    fag.push(nyttFag);
    printFag();
}

function slettFag() {
    var slettFag = document.getElementById("fag-input").value;
    for (let i=0;i<fag.length;i++) {
        if (fag[i].toLowerCase() == slettFag.toLowerCase()) {
            fag.splice(i,1);
        }
    }
    printFag();
}

function printFag() {
    if (fag.length > 0) {
        fag.sort();
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

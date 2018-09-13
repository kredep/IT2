window.onload = startUp;

function startUp() {
    // Listeners
    document.getElementById("vis").onclick = vis;
    document.getElementById("reset").onclick = reset;
}

function reset() {
    /**
     * Resetter hele skjemaet
     */
    document.getElementById("navn").value = "";
    document.getElementById("alder").value = "";
    document.getElementById("hoyde").value = "";
    document.getElementById("gutt").checked = false;
    document.getElementById("jente").checked = false;
    document.getElementById("result").innerHTML = "";
}

function vis() {
    /**
     * Sjekker opplysninger og viser spådom eller feilmelding
     */
    var navn = document.getElementById("navn").value;
    var alder = document.getElementById("alder").value;
    var hoyde = document.getElementById("hoyde").value;
    var gutt = document.getElementById("gutt");
    var jente = document.getElementById("jente");

    var errors = []; // Liste for eventuelle feilmeldinger

    // Sjekker skjemaet og legger inn eventuelle feilmeldinger
    if (navn == "") {
        errors.push("Vennligst fyll ut ditt navn.");
    }
    if (isNaN(alder)) {
        errors.push("Alderen din må være et tall.");
    } else if (alder <= 0) {
        errors.push("Alderen din må være større enn null.");
    }
    if (isNaN(hoyde)) {
        errors.push("Høyden din på være et tall.");
    } else if (hoyde <= 0) {
        errors.push("Høyden din må være større enn null.");
    }
    if (gutt.checked == false && jente.checked == false) {
        errors.push("Vennligst velg kjønn");
    }
    
    // Sjekker om dataen fra skjemaet ga noen feilmeldinger
    if (errors.length == 0) {
        // Skjemadataen er ok, sjekker hvilket kjønn og regner ut tallet
        if (gutt.checked == true) {
            var tall = Number(alder)**2 - Number(hoyde);
        } else {
            var tall = Number(alder)*Number(hoyde)-3
        }
        console.log("Kalkulert tall: " + tall);

        // Sjekker om tallet er partall eller oddetall og viser meldingen
        if (tall % 2 == 0) {
            document.getElementById("result").innerHTML = "Det vil gå deg godt her i verden, " + navn + ". For at spådommen skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345";
        } else {
            document.getElementById("result").innerHTML = "Stakkars deg! Alt kommer til å gå deg galt, " + navn + ". For at spådommen ikke skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345";
        }
    } else {
        // Skjemadataen var ikke korrekt, viser feilmelding(er)
        document.getElementById("result").innerHTML = "<p>Ops noe gikk galt:</p><br><ul>";
        for (let i=0;i<errors.length;i++) {
            document.getElementById("result").innerHTML += "<li>" + errors[i] + "</li>";
        }
        document.getElementById("result").innerHTML += "</ul>";
    }
}

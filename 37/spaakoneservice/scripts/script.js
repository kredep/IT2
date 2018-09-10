window.onload = startUp;

function startUp() {
    document.getElementById("vis").onclick = vis;
    document.getElementById("reset").onclick = reset;
}

function reset() {
    document.getElementById("navn").value = "";
    document.getElementById("alder").value = "";
    document.getElementById("hoyde").value = "";
    document.getElementById("gutt").checked = false;
    document.getElementById("jente").checked = false;
}

function vis() {
    var navn = document.getElementById("navn").value;
    var alder = document.getElementById("alder").value;
    var hoyde = document.getElementById("hoyde").value;
    var gutt = document.getElementById("gutt");
    var jente = document.getElementById("jente");

    var errors = [];
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
    if (errors.length == 0) {
        if (gutt.checked == true) {
            var tall = Number(alder)**2 - hoyde;
        } else {
            var tall = Number(alder)*Number(hoyde)-3
        }
        console.log(tall);
        if (tall % 2 == 0) {
            // good
            document.getElementById("result").innerHTML = "Det vil gå deg godt her i verden, " + navn + ". For at spådommen skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345";
        } else {
            // bad
            document.getElementById("result").innerHTML = "Stakkars deg! Alt kommer til å gå deg galt, " + navn + ". For at spådommen ikke skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345";
        }
    } else {
        document.getElementById("result").innerHTML = "<p>Ops noe gikk galt:</p><br><ul>";
        for (let i=0;i<errors.length;i++) {
            document.getElementById("result").innerHTML += "<li>" + errors[i] + "</li>";
        }
        document.getElementById("result").innerHTML += "</ul>";
    }
}

function beregn() {
    document.getElementById("result").innerHTML = ""; // Renser div

    var forbruk = document.getElementById("forbruk").value; // liter/mil
    var personer = document.getElementById("personer").value; // antall personer
    var utslipp = 2500; // Gram per liter drivstoff
    var errors = [];
    if (isNaN(forbruk)) {
        errors.push("Forbruket må være et tall!");
    } else if (Number(forbruk) <= 0) {
        errors.push("Forbruket må være større enn null!");
    }
    if (isNaN(personer)) {
        errors.push("Antall personer må være et tall!");
    } else if (Number(personer) < 1) {
        errors.push("Antall personer må være større enn eller lik 1!");
    }
    if (errors.length == 0) {
        // Gram per CO2 per person per kilometer
        // x CO2/pers/km
        var co2PerPersonPerKm = ((forbruk * utslipp) / personer) / 10
        document.getElementById("result").innerHTML = co2PerPersonPerKm.toFixed(2) + " g CO2 per person per km";
    } else {
        for (let x=0;x<errors.length;x++) {
            document.getElementById("result").innerHTML += errors[x] + "<br>";
        }
    }
}

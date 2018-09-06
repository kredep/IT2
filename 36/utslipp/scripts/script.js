window.onload = startUp;

function startUp() {
    document.getElementById("beregn").onclick = beregn;
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

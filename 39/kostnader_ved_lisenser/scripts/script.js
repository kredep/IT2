window.onload = startUp;

function startUp() {
    document.getElementById("submit").onclick = run;
}

function run() {
    // Henter input
    var lisenser = document.getElementById("lisenser").value;

    // Sjekker input
    if (isNaN(lisenser)) {
        // Ikke et tall
        document.getElementById("result").innerHTML = "Kun tall, takk.";
    } else if (lisenser <= 0) {
        // Antall lisenser mindre enn eller lik null
        document.getElementById("result").innerHTML = "Antall lisenser må være over null.";
    } else if (!Number.isInteger(Number(lisenser))) {
        document.getElementById("result").innerHTML = "Det selges kun hele lisenser.";
    } else {
        // Beregner pris og rabatt;
        var prosent = 0;
        if (lisenser > 9 && lisenser <= 19) {
            // 10% avslag
            prosent = 10;
        } else if (lisenser > 19 && lisenser <= 49) {
            // 20% avslag
            prosent = 20;
        } else if (lisenser > 49 && lisenser <= 99) {
            // 30% avslag
            prosent = 30;
        } else if (lisenser >= 100) {
            // 40% avslag
            prosent = 40;
        } else {
            // Ikke noe avslag
            prosent = 0;
        }
        var pris = ((lisenser*99) * (1-prosent/100)).toFixed(2);
        document.getElementById("result").innerHTML = "Med en bestilling av " + lisenser + " lisenser vil du få " + prosent + " % avslag og en totaltpris på $" + pris + ".";
    }
}

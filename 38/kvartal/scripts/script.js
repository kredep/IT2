window.onload = startUp;

function startUp() {
    document.getElementById("submit").onclick = run;
}

function run() {
    // Henter variablen
    var month = document.getElementById("month").value;

    // Sjekker input
    if (isNaN(month)) {
        document.getElementById("result").innerHTML = "Kun tall, takk.";
    } else {
        if (month < 1 || month > 12) {
            document.getElementById("result").innerHTML = "Kun tall fra 1 til 12, takk.";
        } else {
            var kvartal = 0;
            if (month <= 3) {
                // 1. kvartal
                kvartal = 1;
            } else if (month >= 4 && month <= 6) {
                // 2. kvartal
                kvartal = 2;
            } else if (month >= 7 && month <= 9) {
                // 3. kvartal
                kvartal = 3;
            } else if (month >= 10) {
                // 4. kvartal
                kvartal = 4;
            }
            console.log("Måneden ligger i " + kvartal + ". kvartal.");
            document.getElementById("result").innerHTML = "Måneden ligger i " + kvartal + ". kvartal";
        }
    }
}

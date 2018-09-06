window.onload = startUp;

function startUp() {
    /**
     * Startfunksjon med lyttere
     */
    document.getElementById("vis").onclick = vis;
}

function vis() {
    /**
     * Funksjon som viser bilder
     */
    document.getElementById("result").innerHTML = ""; // Resetter result-diven
    // Henter verdier fra skjema
    var fra = document.getElementById("fra").value;
    var til = document.getElementById("til").value;
    // Sjekker at verdiene er tall
    if (isNaN(fra) || isNaN(til))  {
        document.getElementById("result").innerHTML = "Kun tall, takk.";
    } else {
        // Konverterer til tall
        var fra = Number(fra);
        var til = Number(til);
        // Sjekker at tallene ligger i korrekt intervall
        if (10>fra>1 || 1>til>10) {
        document.getElementById("result").innerHTML = "Kun tall mellom 1 og 10, takk.";
        } else {
            // Sjekker om "fra" og "til" er i stigende eller synkende rekkefølge
            if (fra < til) {
                // Viser bilder
                for (let i=fra;i<=til;i++) {
                    document.getElementById("result").innerHTML += '<img src="bilder/bilde' + i.toString() + '.jpg" alt="Et bilde">';
                }
            } else {
                // Viser bilder
                for (let i=fra;i>=til;i--) {
                    document.getElementById("result").innerHTML += '<img src="bilder/bilde' + i.toString() + '.jpg" alt="Et bilde">';
                }
            }
        }
    }
}

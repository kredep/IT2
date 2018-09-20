window.onload = startUp;

function startUp() {
    document.getElementById("submit").onclick = run;
}

function run() {
    // Henter variabler
    var personer = document.getElementById("personer").value;
    var antall = document.getElementById("antall").value;
    
    // Sjekker om inputen er et tall
    if (isNaN(personer) || isNaN(antall)) {
        document.getElementById("result").innerHTML = "Kun tall, takk.";
    } else {
        // Beregner
        var pølse_pakker = Math.ceil(personer*antall/10);
        var brød_pakker = Math.ceil(personer*antall/8);
        var pølser_til_overs = pølse_pakker*10 - personer*antall;
        var brød_til_overs = brød_pakker*8 - personer*antall;
        console.log(
            "Antall pølsepakker: " + pølse_pakker + "\n",
            "Antall pølsebrødpakker: " + brød_pakker + "\n",
            "Antall pølser til overs: " + pølser_til_overs + "\n",
            "Antall pølsebrød til overs: " + brød_til_overs + "\n"
        );
        var str = "";
        str += "Antall pølsepakker: " + pølse_pakker + "<br>";
        str += "Antall pølsebrødpakker: " + brød_pakker + "<br>";
        str += "Antall pølser til overs: " + pølser_til_overs + "<br>";
        str += "Antall pølsebrød til overs: " + brød_til_overs;
        document.getElementById("result").innerHTML = str;
    }
}

window.onload = onLoad;

var dager = ["ma","ti","on","to","fr","lø","sø"];

function onLoad() {
    document.getElementById("lag").onclick = kalender;
}

function kalender() {
    var antall = document.getElementById("antall").value;
    var start = Number(document.getElementById("start").value);
    if (isNaN(antall) || antall == "") {
        alert("Skriv inn antall dager i måneden.");
    } else {
        antall = Number(antall);
        var str = "";
        for (var i = 0; i < 7; i++) {
            str += dager[i] + " ";
        }
        str += "<br>";
        for (var i = 1; i <= (antall+start); i++) {
            if (i > start) {
                if ((i-start) < 10) {
                    str += "0" + (i-start) + " ";
                } else {
                    str += (i-start) + " ";
                }
            } else {
                str += "-- ";
            }
            if (i % 7 == 0) {
                str += "<br>";
            }
        }
        document.getElementById("kalender").innerHTML = str;
    }
}

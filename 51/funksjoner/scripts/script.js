window.onload = startUp;

function startUp() {
    document.getElementById("nullpunkter").onclick = finnNullpunkter;
    document.getElementById("sek").onclick = finnTid;
}

function finnTid() {
    var sekunder = document.getElementById("sekunder").value;
    if (isNaN(sekunder)) {
        document.getElementById("tid").innerHTML = "Ikke et tall";
    } else {
        document.getElementById("tid").innerHTML = tid(Number(sekunder));
    }
}

function tid(t) {
    var h = Math.floor(t/3600);
    var m = Math.floor((t-(h*3600))/60);
    var s = t-h*3600-m*60;
    return h + " time(r) " + m + " minutt(er) " + s + " sekund(er)";
}

function finnNullpunkter() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("resultat").innerHTML = "Kun tall, takk";
    } else {
        var nps = nullpunkter(Number(a),Number(b),Number(c));
        if (nps.length == 1) {
            document.getElementById("resultat").innerHTML = nps[0];
        } else {
            document.getElementById("resultat").innerHTML = nps[0] + " v " + nps[1];
        }
    }
}

function nullpunkter(a,b,c) {
    var løsninger = [];
    var underRotTegn = b**2-4*a*c;
    if (underRotTegn < 0) {
        løsninger.push("Ingen løsning");
    } else if (underRotTegn == 0) {
        løsninger.push(
            "x = " + (-b)/(2*a)
        );
    } else {
        løsninger.push(
            "x = " + (-b+underRotTegn**0.5)/(2*a)
        );
        løsninger.push(
            "x = " +(-b-underRotTegn**0.5)/(2*a)
        );
    }
    return løsninger;
}

window.onload = onLoad;

function onLoad() {
    document.getElementById("beregn").onclick = hentVerdier;
}

function hentVerdier() {
    var vars = ["a","b","c"];
    var verdier = [];
    for (var i = 0; i < vars.length; i++) {
        verdier.push(
            tallSjekk(
                document.getElementById(vars[i]).value
            )
        );
    }
    document.getElementById("res").innerHTML = nullpunkt(verdier[0], verdier[1], verdier[2])
}

function tallSjekk(verdi) {
    if (isNaN(verdi)) {
        console.log(`${verdi} er ikke et tall!`);
    } else {
        return Number(verdi);
    }
}

function nullpunkt(a,b,c) {
    var underRot = b**2 - 4*a*c;
    if (underRot < 0) {
        // Ingen løsning
        return "Ingen løsning;"
    } else if (underRot == 0) {
        // En løsning
        var løsn = (-b/2*a);
        return `Funksjonen har løsningen x = ${løsn}`;
    } else {
        // To løsninger
        var løsn1 = (-b+underRot**0.5)/(2*a);
        var løsn2 = (-b-underRot**0.5)/(2*a);
        return `Funksjonen løsningene x = ${løsn1} og x = ${løsn2}`;
    }
}

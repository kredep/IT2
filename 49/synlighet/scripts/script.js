window.onload = startUp;

var runder = 0;

function startUp() {
    knapp.onclick = update;
}

function update() {
    runder++;
    if (runder == 20) {
        document.getElementById("paprika").style.visibility = "visible";
    }
    document.getElementById("runder").innerHTML = "Antall runder: " + runder;
}

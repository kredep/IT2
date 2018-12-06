window.onload = startUp;

var runder = 0;

function startUp() {
    paprika.style.visibility = "hidden";
    knapp.onclick = update;
}

function update() {
    document.getElementById("runder").innerHTML = "Antall runder: " + runder;
    if (runder == 20) {
        document.getElementById("paprika").style.visibility = "visible";
    } else if (runder < 20) {
        runder++;
    }
}

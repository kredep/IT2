window.onload = onLoad;

var kommuner = ["Porsgrunn", "Skien", "Siljan", "Bamble", "Kragerø", "Drangedal"];
var folketall = [36091, 54510, 2351, 14183, 10506, 4105];
var speed = 8;

function onLoad() {
    // Lager visualisering
    visualiserMedSirkler(400, 100, "Folketall i Grenlands kommuner", folketall, kommuner, "", "hr", "sirkel", true, "animasjon");
}

function visualiserMedSirkler(maksDiameter, minDiameter, tittel, dataY, dataX, enhet, id, sirkelKlasse, anim = false, animKlasse) {
    /**
     * @param {string} maksDiameter - største diameter en sirkel kan ha
     * @param {string} minDiameter - minste diameter en sirkel kan ha
     * @param {string} tittel - tittelen til visualiseringen
     * @param {array} dataY - liste med data (tall)
     * @param {array} dataX - navn på sirkelen (tilhørende spesifikasjon)
     * @param {string} enhet - enhet til dataen
     * @param {string} id - id til div på nettsiden som skal holde histogrammet
     * @param {string} sirkelKlasse - navn på css-klassen for en sirkel
     * @param {boolean} anim - true dersom søyla skal animeres
     * @param {string} animKlasse - navn på css-klasse ved eventuell animasjon
     */

    // Forbereder sirkelgenerering
    var wrapper = document.createElement("DIV"); // Lager html element
    wrapper.id = "wrapper"; // Setter id for elementet
    document.getElementById(id).innerHTML = ""; // Fjerner alt i div på nettsiden
    document.getElementById(id).appendChild(wrapper); // Legger til nytt element
    wrapper = document.querySelector('#wrapper'); // Henter det nye elementet
    wrapper.innerHTML = "<br><h1>" + tittel + "</h1>"; // Tittel
    var maxVerdi = Math.max(...dataY); // Største verdi blant dataen
    var timeout = 0;

    // Lager sirker
    for (var i = 0; i < dataY.length; i++) {
        var div = document.createElement("DIV");
        div.classList.add("sirkel-wrap");
        var sideLengde = minDiameter + Math.round((dataY[i]/maxVerdi)*(maksDiameter-minDiameter));
        var sirkel = document.createElement("DIV"); // Lager diven til en sirkel
        // Legger til css-klasse(r)
        sirkel.classList.add(sirkelKlasse);

        // ANIMASJON MED CSS
        /*
        if (anim) {
            sirkel.classList.add(animKlasse);
        }
        */

        var colors = [random(0,255),random(0,255),random(0,255)];
        // Avgjør om skriften burde være mørk eller lys
        if ((colors[0]*0.299+colors[1]*0.587+colors[2]*0.144) < 186) {
            sirkel.style.color = "white";
        }
        sirkel.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
        div.style.width = sideLengde + "px";
        div.style.height = sideLengde + "px";

        // ANIMASJON MED JAVASCRIPT
        if (anim) {
            animate(sirkel, sideLengde, timeout, dataY[i], enhet, dataX[i]);
            timeout += Math.floor(speed/6*sideLengde);
        } else {
            sirkel.style.width = sideLengde + "px";
            sirkel.style.height = sideLengde + "px";
            sirkel.innerHTML = `
                <span class="detaljer">${dataY[i]} ${enhet} <br>
                ${dataX[i]}</span>
            `;
        }
        div.appendChild(sirkel);
        wrapper.appendChild(div);
    }
}

function animate (elem, maks, delay, data1, enhet, data2) {
    var lengde = 0;
    setTimeout(function() {
        var iv = setInterval(function () {
            if (lengde+4 < maks) {
                lengde += 4;
                var frac = Math.floor((lengde/maks)*data1);
                elem.style.width = lengde + "px";
                elem.style.height = lengde + "px";
                elem.innerHTML = `
                    <span class="detaljer">${frac} ${enhet} <br>
                    ${data2}</span>
                `;
            } else {
                clearInterval(iv);
                elem.style.width = maks + "px";
                elem.style.height = maks + "px";
                elem.innerHTML = `
                    <span class="detaljer">${data1} ${enhet} <br>
                    ${data2}</span>
                `;
            }
        }, speed);
    }, delay);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

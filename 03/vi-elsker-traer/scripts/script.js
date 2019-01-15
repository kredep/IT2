window.onload = startUp;

var årstall = [1915,1950,1970,1990,1992,2000];
var groveTrær = {
    "Furu": [20,31,53,89,102,117],
    "Gran": [23,39,72,89,92,99],
    "Lauvtre": [4,6,8,12,15,18]
};

function startUp() {
    document.querySelector('#aSend').onclick = oppga;
    document.querySelector('#bSend').onclick = oppgb;
    for (tresort in groveTrær) {
        document.querySelector('#tresort').innerHTML += '<option value="' + tresort + '">' + tresort + '</option>';
    }
    document.querySelector('#tresort').value = "";
    for (var i=0;i<årstall.length;i++) {
        document.querySelector('#årstall1').innerHTML += '<option value="' + årstall[i] + '">' + årstall[i] + '</option>';
        document.querySelector('#årstall2').innerHTML += '<option value="' + årstall[i] + '">' + årstall[i] + '</option>';
        document.querySelector('#årstall1').value = "";
        document.querySelector('#årstall2').value = "";
    }
    document.querySelector('#tresort').onchange = visualisering;
}

function oppga() {
    var verdi1 = document.querySelector('#år1').value;
    var verdi2 = document.querySelector('#år2').value;
    var div = document.querySelector('#aResultat');

    if (!isNaN(verdi1) && !isNaN(verdi2)) {
        div.innerHTML = "Økning i tallverdi: " + tallverdiEndring(verdi1, verdi2);
        div.innerHTML += "<br> Økning i prosent: " + prosentvisEndring(verdi1, verdi2) + " %";
    } else {
        div.innerHTML = "Vennligst bare benytt tall!";
    }
}

function oppgb() {
    var div = document.querySelector('#bResultat');
    var tresort = document.querySelector('#tresort').value;
    if (tresort == "") {
        div.innerHTML = "Vennligst velg en tresort først.";
    } else {
        var år1 = document.querySelector('#årstall1').value;
        var år2 = document.querySelector('#årstall2').value;
        if (år1 != "" && år2 != "" && !isNaN(år1) && !isNaN(år2)) {
            var verdi1 = groveTrær[tresort][årstall.indexOf(Number(år1))];
            var verdi2 = groveTrær[tresort][årstall.indexOf(Number(år2))];
            div.innerHTML = "Økning i tallverdi: " + tallverdiEndring(verdi1, verdi2) + 
                            "<br> Økning i prosent: " + prosentvisEndring(verdi1, verdi2) + " %";
        } else {
            div.innerHTML = "Vennligst velg to år.";
        }
    }
}

function visualisering() {
    var tresort = document.querySelector('#tresort').value; // Henter tresort
    var data = groveTrær[tresort]; // Henter data gitt tresort
    lagHistogram(data, 'mill.', 'hr', 'søyle', true, 'animasjon'); // Lager histogram
}

function lagHistogram(data, enhet, id, søyleKlasse, anim = false, animKlasse) {
    /**
     * @param {array} data - liste med data (tall)
     * @param {string} enhet - enhet til dataen
     * @param {string} id - id til div på nettsiden som skal holde histogrammet
     * @param {string} søyleKlasse - navn på css-klassen for en søyle
     * @param {boolean} anim - true dersom søyla skal animeres
     * @param {string} animKlasse - navn på css-klasse ved eventuell animasjon
     */

    // Forbereder søylegenerering
    var wrapper = document.createElement("DIV"); // Lager html element
    wrapper.id = "wrapper"; // Setter id for elementet
    document.getElementById(id).innerHTML = ""; // Fjerner alt i div på nettsiden
    document.getElementById(id).appendChild(wrapper); // Legger til nytt element
    wrapper = document.querySelector('#wrapper'); // Henter det nye elementet
    wrapper.innerHTML = "<br><h1>Utvikling i antall grove trær av typen " + tresort.toLowerCase() + "</h1>"; // Tittel
    var mellomrom = 50; // Antall piksler mellomrom mellom søylene
    var maxHøyde = 0.8*(wrapper.clientHeight)-mellomrom; // Maksimal søylehøyde
    var søyleBredde = Math.ceil(((wrapper.clientWidth - mellomrom)-data.length*mellomrom)/data.length); // Bredde på søyle
    var maxVerdi = Math.max(...data); // Største verdi blant dataen
    
    // Lager søyler
    for (var i = 0; i < data.length; i++) {
        var posisjon = i*(søyleBredde+mellomrom)+mellomrom; // Beregner mellomrom
        var søyle = document.createElement("DIV"); // Lager diven til en søyle
        // Legger til css-klasse(r)
        søyle.classList.add(søyleKlasse);
        if (anim) {
            søyle.classList.add(animKlasse);
        }
        var høyde = Math.round((data[i]/maxVerdi)*maxHøyde); // Høyden til søyla
        søyle.style.height = høyde + "px";  // Setter høyde på søyla
        søyle.style.width = søyleBredde + "px";  // Setter bredden på søyla
        søyle.style.left = posisjon + "px"; // Setter posisjonen fra venstre
        // Legger til navnet på søyla
        søyle.innerHTML = '<span class="søyleverdi">' + data[i] + ' ' + enhet + '</span>';
        søyle.innerHTML += '<span class="søylenavn">' + årstall[i] + '</span>';
        
        // Legger til søyle på nettsiden
        wrapper.appendChild(søyle);
    }
}

function tallverdiEndring(tall1, tall2) {
    // Returnerer endringen mellom to tallverdier
    return tall2 - tall1;
}

function prosentvisEndring(tall1, tall2) {
    // Returnerer prosentvis endring fra tall1 til tall2
    return ((tallverdiEndring(tall1, tall2) / tall1) * 100).toFixed(2);
}

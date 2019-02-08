window.onload = onLoad;

var voksenPris = 200; // Per dag (over 12 år)
var barnPris = 100; // Per dag (0-12 år)
var voksenMaks = 1000;
var barnMaks = 500;

function onLoad() {
    document.querySelector('#beregn').onclick = beregn;
}

function beregn() {
    var alder = document.querySelector('#alder').value;
    var dager = document.querySelector('#dager').value;
    var div = document.querySelector('#output');
    if (!isNaN(alder) && !isNaN(dager)) {
        alder = Number(alder);
        dager = Number(dager);
        if (alder < 0 || dager < 0) {
            div.innerHTML = 'Alder eller antall dager kan ikke være et negativt tall.';
        } else {
            if (dager <= 7) {
                if (alder > 12) {
                    var pris = dager * voksenPris;
                    var person = 'voksen';
                    var maks = voksenMaks;
                } else {
                    var pris = dager * barnPris;
                    var person = 'barn';
                    var maks = barnMaks;
                }
                if (pris <= maks) {
                    div.innerHTML = `Heiskortpris for ${person} i ${dager} dager vil koste ${pris} kr.`;
                } else {
                    var avslag = pris - maks;
                    div.innerHTML = `Heiskortpris for ${person} i ${dager} dager vil koste ${maks} kr og du fikk avslag på ${avslag} kr`;
                }
            } else {
                div.innerHTML = 'Du kan ikke bestille heiskort for mer enn én uke.';
            }
        }
    } else {
        div.innerHTML = 'Sjekk input.';
    }
}

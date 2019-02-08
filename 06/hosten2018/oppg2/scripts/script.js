window.onload = onLoad;

var hytter = [
    {
        'navn': 'Granbo',
        'bilder': ['granbo01.jpg','granbo02.jpg','granbo03.jpg'],
        'sengeplasser': 6,
        'standard': 'Middels'
    },
    {
        'navn': 'Granstua',
        'bilder': ['granstua01.jpg','granstua02.jpg','granstua03.jpg'],
        'sengeplasser': 4,
        'standard': 'Høy'
    }
];
var index = 0;

function onLoad() {
    document.querySelector('#granbo').onclick = byggBildegalleri;
    document.querySelector('#granstua').onclick = byggBildegalleri;
}

function byggBildegalleri() {
    index = 0;
    var hytte = Number(this.getAttribute('hytte'));
    var div = document.querySelector('#bildegalleri');
    div.innerHTML = `
        <h2>Bildegalleri for ${hytter[hytte]['navn']}</h2>
        <div id="bilde">
            <img src="multimedia/${hytter[hytte]['bilder'][index]}">
        </div>
        <input id="forrige" type="button" value="Forrige bilde">
        <input id="neste" type="button" value="Neste bilde">
        <br>
        <ul>
            <li>Navn: ${hytter[hytte]['navn']}</li>
            <li>Sengeplasser: ${hytter[hytte]['sengeplasser']}</li>
            <li>Standard: ${hytter[hytte]['standard']}</li>
        </ul>
        `;
        document.querySelector('#neste').onclick = function() {
            index++;
            if (index >= hytter[hytte]['bilder'].length) {
                index = 0;
            }
            document.querySelector('#bilde').innerHTML = `<img src="multimedia/${hytter[hytte]['bilder'][index]}">`;
        };
        document.querySelector('#forrige').onclick = function() {
            index--;
            if (index < 0) {
                index = hytter[hytte]['bilder'].length-1;
            }
            document.querySelector('#bilde').innerHTML = `<img src="multimedia/${hytter[hytte]['bilder'][index]}">`;
        };
}

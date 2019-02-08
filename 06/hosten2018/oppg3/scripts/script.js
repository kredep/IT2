window.onload = onLoad;
/*
    utleid: true
    ledig: false
*/
var sesonger = ['Jul', 'Vinterferie', 'Påske'];
var bestillinger = {
    'Granstua': {
        'Jul': true,
        'Vinterferie': true,
        'Påske': false
    },
    'Granbo': {
        'Jul': false,
        'Vinterferie': false,
        'Påske': true
    },
    'Grantoppen': {
        'Jul': true,
        'Vinterferie': false,
        'Påske': true
    },
    'Granhaug': {
        'Jul': true,
        'Vinterferie': false,
        'Påske': true
    }
};

var hytter = [
    {
        'hytte': 'Granstua',
        'sengeplasser': 4,
        'standard': 'Høy',
        'badstue': 'Ja',
        'ukepris': 12000,
        'bilde': 'granstua.jpg'
    },
    {
        'hytte': 'Granbo',
        'sengeplasser': 6,
        'standard': 'Middels',
        'badstue': 'Nei',
        'ukepris': 15000,
        'bilde': 'granbo.jpg'
    },
    {
        'hytte': 'Grantoppen',
        'sengeplasser': 8,
        'standard': 'Lav',
        'badstue': 'Nei',
        'ukepris': 16000,
        'bilde': 'grantoppen.jpg'
    },
    {
        'hytte': 'Granhaug',
        'sengeplasser': 10,
        'standard': 'Høy',
        'badstue': 'Ja',
        'ukepris': 30000,
        'bilde': 'granhaug.jpg'
    }
];

function onLoad() {
    for (var i = 0; i < sesonger.length; i++) {
        document.querySelector('#sesong').innerHTML += `<option value="${sesonger[i]}">${sesonger[i]}</option>`;
    }
    document.querySelector('#søk').onclick = finnHytter;
}

function finnHytter() {
    var sesong = document.querySelector('#sesong').value;
    console.log(sesong);
    var div = document.querySelector('#resultat');
    div.innerHTML = '<h3>Ledige hytter</h3>';
    for (var i = 0; i < hytter.length; i++) {
        var navn = hytter[i]['hytte'];
        if (!bestillinger[navn][sesong]) {
            // Hytta er ledig i valgt sesong
            div.innerHTML += `
                <div class="hytte">
                    <h4>${hytter[i]['hytte']}</h4>
                    <img src="multimedia/${hytter[i]['bilde']}">
                    <ul>
                        <li>Sengeplasser: ${hytter[i]['sengeplasser']}</li>
                        <li>Standard: ${hytter[i]['standard']}</li>
                        <li>Badstue: ${hytter[i]['badstue']}</li>
                        <li>Ukepris: ${hytter[i]['ukepris']}</li>
                    </ul>
                    <input class="book" type="button" value="Book denne hytta" navn="${navn}" sesong="${sesong}">
                </div>
            `;
        }
    }
    var knapper = document.querySelectorAll('.book');
    for (knapp of knapper) {
        knapp.onclick = bookHytte;
    }
}

function bookHytte() {
    var navn = this.getAttribute('navn');
    var sesong = this.getAttribute('sesong');
    bestillinger[navn][sesong] = true;
    document.querySelector('#resultat').innerHTML = `Din hytte er booket!<br>Spesifikasjoner:<ul><li>Hytte: ${navn}</li><li>Sesong: ${sesong}</li></ul>`;
}

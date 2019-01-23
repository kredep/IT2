window.onload = onLoad;

// Deklarerer arrays
var modeller = ["Kuga", "C-max", "Focus", "Mondeo"];
var utstyrspakker = ["Trend", "Titanium"];
var tilleggspakker = ["Familiepakke", "Førerassistentpakke", "Stilpakke"];
var utstyrPriser = [
    [401000, 420000],
    [320000, 335000],
    [255000, 325000],
    [281000, 361000]
];
var tilleggPriser = [
    [1000, 10200, 9200],
    [1000, 9400, 3600],
    [900, 12500, 9000],
    [1100, 9900, 7200]
];

function onLoad() {
    // Lager dropdown etter nettsiden har lastet
    var select = document.querySelector('#modell');
    for (var i = 0; i < modeller.length; i++) {
        select.innerHTML += `<option value="${modeller[i]}">${modeller[i]}</option>`;
    }
    select.value = "";
    select.onchange = modellValg;
}

function modellValg() {
    // Henter valg modell
    var modell = this.value;
    var index = modeller.indexOf(modell);

    // Lager dropdown med utvalg av utstyrspakker og pris basert på valgt modell
    var select = document.querySelector('#utstyrspakke');
    select.innerHTML = '';
    for (var i = 0; i < utstyrspakker.length; i++) {
        var pakke = utstyrspakker[i];
        var pris = utstyrPriser[index][i];
        select.innerHTML += `<option value="${pakke}">${pakke} til ${pris},-</option>`;
    }
    select.value = '';
    select.onchange = finnPris;

    // lager checkboxer med utvalg av tilleggsutstyr og pris basert på valgt modell
    var div = document.querySelector('#tilleggspakker');
    div.innerHTML = '<br>Velg blant tilleggspakker:<br>';
    for (var i = 0; i < tilleggspakker.length; i++) {
        var pakke = tilleggspakker[i];
        var pris = tilleggPriser[index][i];
        div.innerHTML += `<input type="checkbox" name="tilleggspakke" value="${pakke}">${pakke} til ${pris},-<br>`;
    }
    for (checkbox of document.querySelectorAll('[name=tilleggspakke]')) {
        checkbox.onchange = finnPris;
    }

    document.querySelector('#totalpris').innerHTML = '';
}

function finnPris() {
    // Henter modell
    var modell = document.querySelector('#modell').value;
    var modellIndex = modeller.indexOf(modell);

    // Henter utstyrspakkeprisen
    var utstyrsPakke = document.querySelector('#utstyrspakke').value;
    if (utstyrsPakke != '') {
        var utstyrsPakkeIndex = utstyrspakker.indexOf(utstyrsPakke);
        var totalpris = utstyrPriser[modellIndex][utstyrsPakkeIndex];

        // Henter samlet pris for alle tilleggspakker
        for (checkbox of document.querySelectorAll('[name=tilleggspakke]')) {
            if (checkbox.checked) {
                var tilleggIndex = tilleggspakker.indexOf(checkbox.value);
                totalpris += tilleggPriser[modellIndex][tilleggIndex];
            }
        }
        
        // Skriver ut totalprisen til nettsiden
        document.querySelector('#totalpris').innerHTML = `Din Ford ${modell} ${utstyrsPakke} med tilleggsutstyr vil koste ${totalpris},-`;
    }
}

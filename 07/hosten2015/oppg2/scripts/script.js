window.onload = startUp;

var fag = [
    {
        'studie': 'Lektorutdanning i historie',
        'poenggrense': 50
    },
    {
        'studie': 'Lektorutdanning i språkfag/engelsk',
        'poenggrense': 48
    }
];

function startUp() {
    for (var i = 0; i < fag.length; i++) {
        document.querySelector('#studie').innerHTML += `<option value="${i}">${fag[i]['studie']}</option>`;
    }
    sjekk.onclick = kommerJegInn;
}

function kommerJegInn() {
    var snitt = document.querySelector('#snitt').value;
    var tilleggspoeng = document.querySelector('#tilleggspoeng').value;
    var studie = document.querySelector('#studie').value;
    var poenggrense = fag[Number(studie)]['poenggrense'];
    var tilbakemelding = document.querySelector('#tilbakemelding1');

    if (isNaN(snitt) || isNaN(tilleggspoeng) || isNaN(poenggrense)) {
        tilbakemelding.innerHTML = "Kun tall.";
    } else {
        var poeng = Number(snitt)*10 + Number(tilleggspoeng);
        console.log(poeng);
        if (poeng >= poenggrense) {
            tilbakemelding.innerHTML = "Du kommer sannsynligvis inn.";
        } else {
            tilbakemelding.innerHTML = "Du kommer sannsynligvis ikke inn.";
        }
    }
}

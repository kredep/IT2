window.onload = onLoad;

var programfag = 0;
var eksamener = 0;

var fag = [
    'Engelsk',
    'Historie, VG3',
    'Norsk, VG3'
];

function onLoad() {
    byggTabell();
    document.querySelector('#nytt-fag').onclick = nyttFag;
    document.querySelector('#beregn').onclick = beregn;
}

function byggTabell() {
    var tabell = document.querySelector('#tabell');
    for (var i = 0; i < fag.length; i++) {
        tabell.innerHTML += `
            <tr>
                <td>${fag[i]}</td>
                <td>${karakterDrodown('standpunkt', i)}</td>
                <td>${karakterDrodown('eksamen', i)}</td>
            </tr>
        `;
    }
    tabell.innerHTML += `
    <tr id="siste">
        <td colspan="2">
            <input id="fag" type="text" placeholder="Skriv inn programfag">
        </td>
        <td>
            <input id="nytt-fag" type="button" value="Legg til nytt fag">
        </td>
    </tr>
    <tr>
        <td colspan="3">
            <input id="tilleggspoeng" type="text" placeholder="Skriv inn tilleggspoeng">
        </td>
    </tr>`;
}

function nyttFag() {
    var faget = document.querySelector('#fag').value;
    document.querySelector('#fag').value = "";
    if (faget == "") {
        alert("Tekstboksen er tom!");
    } else if (fag.includes(faget)) {
        alert("Faget finnes allerede!");
    } else {
        programfag++;
        var insertId = fag.length;
        fag.push(faget);
        var table = document.querySelector('#tabell');
        var antallRader = tabell.rows.length;
        var row = table.insertRow(antallRader-2);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = `<td>${faget}</td>`;
        cell2.innerHTML = `<td>${karakterDrodown('standpunkt', insertId)}</td>`;
        cell3.innerHTML = `<td>${karakterDrodown('eksamen', insertId)}</td>`;
    }
}

function karakterDrodown(form, mittFag) {
    var dropdown = `<select name="karakter" form="${form}" fag="${mittFag}"><option>Velg</option>`;
    for (var i = 1; i <= 6; i++) {
        dropdown += `<option value="${i}">${i}</option>`;
    }
    dropdown += '</select>';
    return dropdown;
}

function beregn() {
    var karakterer = [];
    var data = document.querySelectorAll('[name=karakter]');
    for (kar of data) {
        var karakter = kar.value;
        if (karakter != 'Velg') {
            var faget = kar.getAttribute('fag');
            var form = kar.getAttribute('form');
            if (form == 'eksamen') {
                eksamener++;
            }
            karakterer.push(
                {
                    'fag': faget,
                    'karakter': karakter,
                    'form': form
                }
            );
        }
    }
    var tilleggspoeng = document.querySelector('#tilleggspoeng').value;
    if (tilleggspoeng == "") {
        tilleggspoeng = 0;
    }
    if (programfag < 6) {
        alert('Du må legge til minst 6 programfag!');
    } else if (eksamener < 5) {
        alert('Du må oppgi minst 5 eksamenskarakterer!');
    } else if (isNaN(tilleggspoeng)) {
        alert('Tilleggspoengene må være et tall!');
    } else {
        karakterer.sort(function(a,b){return b.karakter - a.karakter});
        var div = document.querySelector('#karakterliste');
        div.innerHTML = `
            <tr>
                <th>Fag</th>
                <th>Karakter</th>
                <th>Form</th>
            </tr>
        `;
        var snitt = 0;
        for (var i = 0; i < karakterer.length; i++) {
            snitt += Number(karakterer[i]['karakter']);
            div.innerHTML += `
                <tr>
                    <td>${fag[Number(karakterer[i]['fag'])]}</td>
                    <td>${karakterer[i]['karakter']}</td>
                    <td>${karakterer[i]['form']}</td>
                </tr>
            `;
        }
        snitt /= karakterer.length;
        var poeng = snitt*10+Number(tilleggspoeng);
        document.querySelector('#resultat').innerHTML = `
            Din totale poengsum ble: ${(poeng).toFixed(1)}
        `;
    }
}

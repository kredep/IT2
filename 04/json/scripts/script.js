window.onload = onLoad;

var myData;

function onLoad() {
    myData = JSON.parse(klasseliste);
    document.querySelector('#skriv-ut-alle').onclick = skrivUtAlle;
    document.querySelector('#ny-person').onclick = nyPerson;
    document.querySelector('#alle-over-18').onclick = alleOver18;
    document.querySelector('#finn-staale').onclick = finnStaale;
    document.querySelector('#slett-siste-person').onclick = slettSistePerson;
    document.querySelector('#endre-person').onclick = endrePerson;
    document.querySelector('#slett-personer').onclick = slettPersoner;
}

function skrivUtAlle() {
    var div = document.querySelector('#item2');
    div.innerHTML = `<h2>Alle personer i lista:</h2>`;
    for (var i = 0; i < myData.length; i++) {
        div.innerHTML += `${myData[i]['fornavn']} ${myData[i]['etternavn']} på ${myData[i]['alder']} år <br>`;
    }
}

function nyPerson() {
    var div = document.querySelector('#item2');
    div.innerHTML = `
        <h2>Ny person</h2>
        Fornavn: <input id="fornavn" type="text"><br>
        Etternavn: <input id="etternavn" type="text"><br>
        Alder: <input id="alder" type="text"><br>
        <input id="send" type="button" value="Legg til">
    `;
    document.querySelector('#send').onclick = function() {
        var fornavn = document.querySelector('#fornavn').value;
        var etternavn = document.querySelector('#etternavn').value;
        var alder = document.querySelector('#alder').value;
        if (fornavn == '' || etternavn == '' || isNaN(alder)) {
            div.innerHTML = "Sjekk input!";
        } else {
            myData.push(
                {"fornavn": fornavn, "etternavn": etternavn, "alder": Number(alder)}
            );
            div.innerHTML = "Lagt til!";
        }
    };
}

function alleOver18() {
    var div = document.querySelector('#item2');
    div.innerHTML = `<h2>Alle personer <u>over</u> 18 i lista:</h2>`;
    for (var i = 0; i < myData.length; i++) {
        if (myData[i]['alder'] > 18) {
            div.innerHTML += `${myData[i]['fornavn']} ${myData[i]['etternavn']} på ${myData[i]['alder']} år <br>`;
        }
    }
}

function finnStaale() {
    var div = document.querySelector('#item2');
    for (var i = 0; i < myData.length; i++) {
        if (myData[i]['fornavn'] == 'Staale' && myData[i]['etternavn'] == 'Bergersen') {
            div.innerHTML = `Staale Bergersen har index: ${i}`;
        }
    }
}

function slettSistePerson() {
    myData.splice(myData.length-1, 1);
    document.querySelector('#item2').innerHTML = 'Siste person slettet';
}

function endrePerson() {
    var div = document.querySelector('#item2');
    div.innerHTML = `
        <h2>Endre en person</h2>
        <select id="person"></select>
        <div id="endre"></div>
    `;
    var select = document.querySelector('#person');
    for (var i = 0; i < myData.length; i++) {
        select.innerHTML += `<option value="${i}">${myData[i]['fornavn']} ${myData[i]['etternavn']} på ${myData[i]['alder']} år</option>`;
    }
    select.value = "";
    select.onchange = function () {
        var index = select.value;
        document.querySelector('#endre').innerHTML = `
            Fornavn: <input id="fornavn" type="text" value="${myData[index]['fornavn']}"><br>
            Etternavn: <input id="etternavn" type="text" value="${myData[index]['etternavn']}"><br>
            Alder: <input id="alder" type="text" value="${myData[index]['alder']}"><br>
            <input id="oppdater" type="button" value="Oppdater">
        `;
        document.querySelector('#oppdater').onclick = function() {
            var fornavn = document.querySelector('#fornavn').value;
            var etternavn = document.querySelector('#etternavn').value;
            var alder = document.querySelector('#alder').value;
            if (fornavn == '' || etternavn == '' || isNaN(alder)) {
                document.querySelector('#endre').innerHTML = 'Sjekk input!';
            } else {
                myData[index]['fornavn'] = fornavn;
                myData[index]['etternavn'] = etternavn;
                myData[index]['alder'] = Number(alder);
                document.querySelector('#endre').innerHTML = 'Oppdatert!';
            }
        };
    };
}

function slettPersoner() {
    var div = document.querySelector('#item2');
    div.innerHTML = `<h2>Slett personer</h2>`;
    for (var i = 0; i < myData.length; i++) {
        div.innerHTML += `<input type="checkbox" name="person" value="${i}"> ${myData[i]['fornavn']} ${myData[i]['etternavn']} på ${myData[i]['alder']} år<br>`;
    }
    div.innerHTML += `<br><input id="slett" type="button" value="Slett personer">`;
    document.querySelector('#slett').onclick = function() {
        var checkboxes = document.querySelectorAll('[name=person]');
        for (var i = checkboxes.length-1; i > -1; i--) {
            if (checkboxes[i].checked == true) {
                myData.splice(Number(checkboxes[i].value), 1);
            }
        }
        div.innerHTML = `Personer slettet!`;
    };
    
}

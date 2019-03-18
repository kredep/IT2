// Kjører funksjonen 'onLoad' etter nettsiden har blitt lastet inn
window.onload = onLoad;

function onLoad() {
	// Lager lytter på beregn-knappen
	document.querySelector('#beregn').onclick = beregn;
}

function beregn() {
	// Brukeren trykker på knappen, henter data fra siden
	var mannValg = document.getElementById("mann").checked;
	var kvinneValg = document.getElementById("kvinne").checked;
	var alderVar = document.getElementById("alder").value;
	var hoydeVar = document.getElementById("hoyde").value;
	var magiskTall = 0;
	// Beregner magisk tall eller sender feilmelding basert på input
	if(mannValg) {
		magiskTall = alderVar * alderVar - hoydeVar;
	} else if (kvinneValg) {
		magiskTall = alderVar * hoydeVar - 3;
	} else {
		alert("Du må velge kjønn!");
	}

	// Sender spådom til brukeren basert på det beregnede magiske tallet
	if (magiskTall % 2 == 0) {
			document.getElementById("utTekst").innerHTML = "Det vil gå deg godt her i verden... For at spådommen skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345";
	} else {
		document.getElementById("utTekst").innerHTML = "Stakkars deg! Alt kommer til å gå deg galt... For at spådommen ikke skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345";
	}
}

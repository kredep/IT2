window.onload = startUp;

function startUp() {
    for (let i=1;i<=21;i++) {
        console.log(i);
        document.getElementById(i.toString()).addEventListener('click', function(){
            vis(i-1);
        });
    }
}

function vis(i) {
    var om = [
        "type=text, et tekstfelt",
        "type=password, et tekstfelt for passord",
        "type=submit, en knapp for sending av skjema",
        "type=reset, en knapp for resetting av et skjema",
        "type=radio, en knapp for valg av én av flere",
        "type=radio, en knapp for valg av én av flere",
        "type=checkbox, en knapp for valg av flere blant flere",
        "type=button, en knapp",
        "type=color, en fargevelger (HTML5)",
        "type=date, en datovelger (HTML5)",
        "type=datetime-local, en dato og tidsvelger uten tidssone (HTML5)",
        "type=email, et tekstfelt for en epost (HTML5)",
        "type=file, en filvelger (HTML5)",
        "type=month, en månedsvelger (HTML5)",
        "type=number, en tallvelger (HTML5)",
        "type=range, en glider mellom to verdier (HTML5)",
        "type=search, et tekstfelt for søk (HTML5)",
        "type=tel, et tekstfelt for telefonnummer (HTML5)",
        "type=time, en tidsvelger (HTML5)",
        "type=url, en tekstfelt for nettadresser (HTML5)",
        "type=week, en ukevelger (HTML5)"
    ];
    document.getElementById("om").innerHTML = om[i];
}

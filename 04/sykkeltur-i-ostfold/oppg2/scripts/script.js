window.onload = onLoad;

var totalpris = 0;
var rutepriser = {
    "kort": 3200,
    "lang": 7800
};
var attraksjoner = [
    {
        navn: "Saftpressekurs Askim saftpresseri (Askim)",
        pris: 190,
        inkludert: ["kort", "lang"]
    },
    {
        navn: "Sparsertur langs Olavsleden (Halden)",
        pris: 150,
        inkludert: ["lang"]
    },
    {
        navn: "Omvisning Rød Herregård (Halden)",
        pris: 95,
        inkludert: ["lang"]
    },
    {
        navn: "Tur med MS Strømsfoss (Halden)",
        pris: 110,
        inkludert: ["lang"]
    },
    {
        navn: "Skattejakt i Gamlebyen (Fredrikstad)",
        pris: 95,
        inkludert: ["kort", "lang"]
    }, {
        navn: "Elvelangs Glomma (Fredrikstad)",
        pris: 65,
        inkludert: ["kort", "lang"]
    },
    {
        navn: "Mini-Cruise på Glomma (Fredrikstad)",
        pris: 145,
        inkludert: ["kort", "lang"]
    },
    {
        navn: "Rammeverksted på Gbeggeri Lund (Ørje)",
        pris: 120,
        inkludert: ["lang"]
    },
    {
        navn: "Våler Klartepark (Moss)",
        pris: 195,
        inkludert: ["kort", "lang"]
    },
    {
        navn: "Pilegrimsveien (Moss)",
        pris: 60,
        inkludert: ["kort", "lang"]
    }
];

function onLoad() {
    document.querySelector('#kort').onchange = turLengde;
    document.querySelector('#lang').onchange = turLengde;
}

function turLengde() {
    byggMeny(this.value);
}

function byggMeny(turLengde) {
    totalpris = rutepriser[turLengde];
    document.querySelector('#totalpris').innerHTML = "Totalpris: " + totalpris + ",-";
    var meny = document.getElementById("attraksjoner");
    meny.innerHTML = "Velg attraksjoner du ønsker å delta på:<br><br>";
    for (var i = 0; i < attraksjoner.length; i++) {
        if (attraksjoner[i]["inkludert"].includes(turLengde)) {
            meny.innerHTML += '<input class="attraksjon" type="checkbox" pris="' + attraksjoner[i]["pris"] + '">' + attraksjoner[i]["navn"] + " Pris: " + attraksjoner[i]["pris"] + ",-<br>";
        }
    }
    var checkboxes = document.querySelectorAll('.attraksjon');
    for (box of checkboxes) {
        box.onchange = oppdaterValg;
    }
}

function oppdaterValg () {
    var pris = Number(this.getAttribute("pris"));
    if (this.checked) {
        totalpris += pris
    } else {
        totalpris -= pris;
    }
    document.querySelector('#totalpris').innerHTML = "Totalpris: " + totalpris + ",-";
}

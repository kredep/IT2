window.onload = startUp;

var pizzaer = [
    {navn:"Classic",pris:129,ingredienser:[
        "Mel",
        "Gjær",
        "Egg",
        "Vann",
        "Ost",
        "Tomatsaus"
    ]},
    {navn:"Pepperoni",pris:149,ingredienser:[
        "Mel",
        "Gjær",
        "Egg",
        "Vann",
        "Ost",
        "Tomatsaus",
        "Pepperoni"
    ]},
    {navn:"Hawaii",pris:139,ingredienser:[
        "Mel",
        "Gjær",
        "Egg",
        "Vann",
        "Ost",
        "Tomatsaus",
        "Skinke",
        "Ananas"
    ]},
    {navn:"Deluxe",pris:189,ingredienser:[
        "Mel",
        "Gjær",
        "Egg",
        "Vann",
        "Ost",
        "Tomatsaus",
        "Biff",
        "Pepperoni",
        "Skinke"
    ]},
    {navn:"Classic Mini",pris:99,ingredienser:[
        "Mel",
        "Gjær",
        "Egg",
        "Vann",
        "Ost",
        "Tomatsaus"
    ]}
];
var drikkePris = 29;

function startUp() {
    lagMeny();
    send.onclick = hentBestilling;
}

function lagMeny() {
    var meny = document.getElementById("menu");
    var pizzavelger = document.getElementById("pizza");
    pizzavelger.innerHTML += '<select>';
    for (let i=0;i<pizzaer.length;i++) {
        let navn = pizzaer[i]["navn"];
        let pris = pizzaer[i]["pris"];
        let ingredienser = pizzaer[i]["ingredienser"];
        let css = '';
        if (i == 0) {
            css = ' style="border-left: 2px solid black;"';
        }
        var pizza = '<div class="menu-item"' + css + '><h3><i><b>' + navn + ' Pizza</b></i></h3>Pris: ' + pris + 'kr<br>Ingredienser:<ul>';
        for (let x=0;x<ingredienser.length;x++) {
            pizza += '<li>' + ingredienser[x] + '</li>';
        }
        pizza += '</ul></div>';
        meny.innerHTML += pizza;
        pizzavelger.innerHTML += '<option value="' + i + '">' + navn + '</option>';
    }
    pizzavelger.innerHTML += '</select>';
}

function hentBestilling() {
    var pizza = document.getElementById("pizza").value;
    var drikke = document.getElementById("drikke").value;

    if (!isNaN(drikke)) {
        drikke = Number(drikke);
        if (drikke >= 0) {
            var navn = pizzaer[pizza]["navn"];
            var prisPizza = pizzaer[pizza]["pris"];
            var prisDrikke = drikke * drikkePris;

            document.getElementById("output").innerHTML = "<h2>Kvittering</h2><p>Takk for din bestilling!<br><br>Du har bestilt følgende:<br>"
                                                                + "En " + navn + " pizza til " + prisPizza + ",- inkl/MVA (" + (prisPizza/1.15).toFixed(2) + ",- ekskl/MVA)<br>"
                                                                + drikke + " drikke til " + prisDrikke + ",- inkl/MVA (" + (prisDrikke/1.15).toFixed(2) + ",- ekskl/MVA)";
        } else {
            document.getElementById("output").innerHTML = "Antall drikke må være være et positivt tall!";
        }
    } else {
        document.getElementById("output").innerHTML = "Antall drikke må være et tall!";
    }
}

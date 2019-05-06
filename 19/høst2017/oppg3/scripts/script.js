window.onload = onLoad;

var passwords = [
    "Passord001",
    "Passord002",
    "Passord003",
    "Passord004",
    "Passord005",
    "Passord006",
    "Passord007",
    "Passord008",
    "Passord009",
    "Passord010"
];

var partierOgStemmer = {
    "Rødt": 0,
    "SV": 0,
    "AP": 0,
    "SP": 0,
    "MDG": 0,
    "KrF": 0,
    "V": 0,
    "H": 0,
    "FrP": 0,
    "PIR": 0
};

function onLoad() {
    byggLogin();
}

function byggLogin() {
    document.body.innerHTML = `
        <h1>Login</h1>
        <input type="text" id="password">
        <input type="button" id="login" value="Login">
        <br><br><br>
        <input type="button" id="resultater" value="Vis resultater">
    `;
    document.getElementById("login").onclick = login;
    document.getElementById("resultater").onclick = resultater;
}

function resultater() {
    document.body.innerHTML = '<div id="wrapper" style="height: 600px;"></div><input id="return" type="button" value="Tilbake til innlogging">';
    var data = [];
    var dataNavn = [];
    for (var parti in partierOgStemmer) {
        data.push(partierOgStemmer[parti]);
        dataNavn.push(parti);
    }
    lagHistogram("Valgresultat", data, dataNavn, "", "wrapper", "søyle", true, "animasjon");
    document.getElementById("return").onclick = byggLogin;
}

function login() {
    var pw = document.getElementById("password").value;
    if (passwords.includes(pw) && pw != "") {
        var index = passwords.indexOf(pw);
        passwords[index] = "";
        giStemme();
    } else {
        alert("Galt passord!");
    }
}

function giStemme() {
    document.body.innerHTML = `
        <h1>Gi din stemme</h1>
        <form id="partier"></form>
        <input type="button" id="send-stemme" value="Send stemme">
    `;
    for (var parti in partierOgStemmer) {
        document.getElementById("partier").innerHTML += `<input type="radio" value="${parti}" name="parti"> ${parti} <br>`;
    }
    document.getElementById("send-stemme").onclick = sendStemme;
}

function sendStemme() {
    var stemme = document.getElementById("partier").parti.value;
    var bekreft = confirm(`Ønsker du å gi din stemme til ${stemme}?`);
    if (bekreft) {
        partierOgStemmer[stemme]++;
        alert('Takk for din stemme!');
        byggLogin();
    } else {
        alert('Velg parti på nytt!');
    }
}

function lagHistogram(tittel, data, dataNavn, enhet, id, søyleKlasse, anim = false, animKlasse) {
    /**
     * @param {string} tittel - tittel på histogrammet
     * @param {array} data - liste med data (tall)
     * @param {array} dataNavn - liste med navn til søylene
     * @param {string} enhet - enhet til dataen
     * @param {string} id - id til div på nettsiden som skal holde histogrammet
     * @param {string} søyleKlasse - navn på css-klassen for en søyle
     * @param {boolean} anim - true dersom søyla skal animeres
     * @param {string} animKlasse - navn på css-klasse ved eventuell animasjon
     */

    // Forbereder søylegenerering
    var wrapper = document.createElement("DIV"); // Lager html element
    wrapper.id = "wrapper"; // Setter id for elementet
    document.getElementById(id).innerHTML = ""; // Fjerner alt i div på nettsiden
    document.getElementById(id).appendChild(wrapper); // Legger til nytt element
    wrapper = document.querySelector('#wrapper'); // Henter det nye elementet
    wrapper.innerHTML = "<br><h1>" + tittel + "</h1>"; // Tittel
    var mellomrom = 50; // Antall piksler mellomrom mellom søylene
    var maxHøyde = 0.7*(wrapper.clientHeight)-mellomrom; // Maksimal søylehøyde
    var søyleBredde = Math.ceil(((wrapper.clientWidth - mellomrom)-data.length*mellomrom)/data.length); // Bredde på søyle
    var maxVerdi = Math.max(...data); // Største verdi blant dataen
    
    // Lager søyler
    for (var i = 0; i < data.length; i++) {
        var posisjon = i*(søyleBredde+mellomrom)+mellomrom; // Beregner mellomrom
        var søyle = document.createElement("DIV"); // Lager diven til en søyle
        // Legger til css-klasse(r)
        søyle.classList.add(søyleKlasse);
        if (anim) {
            søyle.classList.add(animKlasse);
        }
        var høyde = Math.round((data[i]/maxVerdi)*maxHøyde); // Høyden til søyla
        søyle.style.height = høyde + "px";  // Setter høyde på søyla
        søyle.style.width = søyleBredde + "px";  // Setter bredden på søyla
        søyle.style.left = posisjon + "px"; // Setter posisjonen fra venstre
        // Legger til navnet på søyla
        søyle.innerHTML = '<span class="søyleverdi">' + data[i] + ' ' + enhet + '</span>';
        søyle.innerHTML += '<span class="søylenavn">' + dataNavn[i] + '</span>';
        
        // Legger til søyle på nettsiden
        wrapper.appendChild(søyle);
    }
}

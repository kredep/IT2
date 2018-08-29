window.onload = startUp;

function startUp() {
    /**
     * Start-funksjon.
     */
}

function mod(a, n) {
    /**
     * Modulo funksjon. Finner rest ved divisjon
     */
    return a - Math.floor(a/n) * n
}

console.log("Finner resten av 7 / 3 ved hjelp av mod(7,3), en egen funksjon for modulo: " + mod(7,3));
var tall = 0;
tall++;
console.log("Ved å bruke inkrementering kan man øke verdien på den definerte variabelen 'tall' fra 0 til 1 med tall++: " + tall);
tall--;
console.log("Ved å bruke dekrementering kan man senke verdien på variabelen 'tall' tilbake til 0 fra 1: " + tall);

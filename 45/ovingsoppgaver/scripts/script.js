window.onload = startUp;

var tall = [4,5,2,3,4,6,1,2,0,9,7,6,8,5,6,4,2,3,4,7,3];
var forekomster = new Array(10).fill(0);

var alfabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var liste = ["F","B","C","F","Q","P"];
var skrivUt = [];

function startUp() {
    for (let i=0;i<tall.length;i++) {
            forekomster[tall[i]] += 1;
    }
    for (let i=0;i<forekomster.length;i++) {
        document.getElementById("boks1").innerHTML += i + ": " + forekomster[i] + "<br>";
    }


    for (let i=0;i<alfabet.length;i++) {
        if (!liste.includes(alfabet[i])) {
            skrivUt.push(alfabet[i]);
        }
    }
    for (let i=0;i<skrivUt.length;i++) {
        document.getElementById("boks2").innerHTML += skrivUt[i] + ", ";
    }
}

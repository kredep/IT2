window.onload = startUp;

function startUp() {
  // Lyttere for knapper, kjører deretter funksjoner
  document.getElementById("generell").onclick = generell;
  document.getElementById("mat").onclick = mat;
  document.getElementById("transport").onclick = transport;
}

function generell() {
  document.getElementById("result").innerHTML = ""; // Renser div-en result
  var price = document.getElementById("price").value; // Henter bruker-input
  if (isNaN(price)) { // Sjekker om bruker-input faktisk er et tall
    // Inputen var ikke et tall, sender feilmelding
    console.log("error");
    var p = document.createElement("p");
    var txt = document.createTextNode("Prisen kan kun være et tall!");
    p.appendChild(txt);
    document.getElementById("result").appendChild(p);
  } else {
    // Brukerinputen var et tall, sjekker om tallet er over null
    if (price > 0) {
      // Regner ut
      var newPrice = price * 1.25;
      var p = document.createElement("p");
      var txt = document.createTextNode("Din pris med MVA er: " + newPrice.toFixed(2));
      p.appendChild(txt);
      document.getElementById("result").appendChild(p);
    } else {
      // Sender feilmelding
      var p = document.createElement("p");
      var txt = document.createTextNode("Prisen kan ikke være null eller negativ!");
      p.appendChild(txt);
      document.getElementById("result").appendChild(p);
    }
  }
}
function mat() {
  document.getElementById("result").innerHTML = ""; // Renser div-en result
  var price = document.getElementById("price").value; // Henter bruker-input
  if (isNaN(price)) { // Sjekker om bruker-input faktisk er et tall
    // Inputen var ikke et tall, sender feilmelding
    console.log("error");
    var p = document.createElement("p");
    var txt = document.createTextNode("Prisen kan kun være et tall!");
    p.appendChild(txt);
    document.getElementById("result").appendChild(p);
  } else {
    // Brukerinputen var et tall, sjekker om tallet er over null
    if (price > 0) {
      // Regner ut
      var newPrice = price * 1.15;
      var p = document.createElement("p");
      var txt = document.createTextNode("Din pris med MVA er: " + newPrice.toFixed(2));
      p.appendChild(txt);
      document.getElementById("result").appendChild(p);
    } else {
      // Sender feilmelding
      var p = document.createElement("p");
      var txt = document.createTextNode("Prisen kan ikke være null eller negativ!");
      p.appendChild(txt);
      document.getElementById("result").appendChild(p);
    }
  }
}
function transport() {
  document.getElementById("result").innerHTML = ""; // Renser div-en result
  var price = document.getElementById("price").value; // Henter bruker-input
  if (isNaN(price)) { // Sjekker om bruker-input faktisk er et tall
    // Inputen var ikke et tall, sender feilmelding
    console.log("error");
    var p = document.createElement("p");
    var txt = document.createTextNode("Prisen kan kun være et tall!");
    p.appendChild(txt);
    document.getElementById("result").appendChild(p);
  } else {
    // Brukerinputen var et tall, sjekker om tallet er over null
    if (price > 0) {
      // Regner ut
      var newPrice = price * 1.12;
      var p = document.createElement("p");
      var txt = document.createTextNode("Din pris med MVA er: " + newPrice.toFixed(2));
      p.appendChild(txt);
      document.getElementById("result").appendChild(p);
    } else {
      // Sender feilmelding
      var p = document.createElement("p");
      var txt = document.createTextNode("Prisen kan ikke være null eller negativ!");
      p.appendChild(txt);
      document.getElementById("result").appendChild(p);
    }
  }
}

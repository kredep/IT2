window.onload = startUp;

function startUp() {
  document.getElementById("beregn").onclick = run; // Listener for button with id "beregn", on click function "run" will run
}

function run() {
  var bensin = document.getElementById("bensin");
  var diesel = document.getElementById("diesel");
  var liter = document.getElementById("liter").value;
  var priser = new Array();
  priser["bensin"] = 13.40;
  priser["diesel"] = 12.90;
  var arr = new Array();

  document.getElementById("result").innerHTML = "";

  if (bensin.checked == false && diesel.checked == false) {
    arr.push("Vennligst velg enten bensin eller diesel.")
  } else {
    if (bensin.checked == true && diesel.checked == false) {
      // BENSIN
      drivstoff = "bensin";
    } else if (bensin.checked == false && diesel.checked == true) {
      // DIESEL
      drivstoff = "diesel";
    }
  }
  if (isNaN(liter)) {
    arr.push("Antall liter må være et tall!");
  } else {
    if (liter == 0) {
      arr.push("Du kan ikke kjøpe 0 liter drivstoff!");
    } else if (liter > 0 && liter < 5) {
      arr.push("Vi selger ikke så små kvanta drivstoff!");
    } else if (liter < 0) {
      arr.push("Vi tar ikke drivstoff i retur!");
    } else if (liter > 80) {
      arr.push("Tanken din rommer ikke over 80 liter bensin!");
    }
  }
  if (arr.length == 0) {
    console.log("GOOD!");
    document.getElementById("result").innerHTML = "Takk for ditt kjøp av " + liter + " liter " + drivstoff + "!<br> Totalprisen ble " + (liter * priser[drivstoff]).toFixed(2) + " kr!";
  } else {
    console.log(arr);
    var p = document.createElement("p");
    var txt = document.createTextNode("Ops! Noe gikk galt:");
    p.appendChild(txt);
    document.getElementById("result").appendChild(p);

    var li = document.createElement("ul");
    li.setAttribute("id", "errors");
    document.getElementById("result").appendChild(li);
    for (i = 0; i < arr.length; i++) {
      var para = document.createElement("li");
      var t = document.createTextNode(arr[i]);
      para.appendChild(t);
      document.getElementById("errors").appendChild(para);
      console.log("w");
    }
  }
}

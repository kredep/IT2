window.onload = startUp;

function startUp() {
  // Lyttere for knapper, kjører deretter funksjoner
  document.getElementById("task1").onclick = task1;
  document.getElementById("task2").onclick = task2;
  document.getElementById("task3").onclick = task3;
  document.getElementById("task4").onclick = task4;
}

function task1() {
  document.getElementById("do").innerHTML = "<p>Her dukket det opp en tekst!</p>";
}
function task2() {
  document.getElementById("do").innerHTML= '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4L2PqTSE09ewR7Fy-TaVMVulslPTycn8w4Quh_O_mxRFuU3GN">';
}
function task3() {
  var tekst = document.getElementById("tekst").value;
  document.getElementById("do").innerHTML = "<p>" + tekst + "</p>";
}
function task4() {
  document.getElementById("tekst").value = "Dette er en tekst i tekstfeltet!";
}

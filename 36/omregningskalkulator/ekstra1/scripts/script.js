window.onload = startUp;

function startUp() {
  for(let i=0;i<=9;i++) {
    document.getElementById(i.toString()).addEventListener('click', function(){
    run(i);
});
  }
  document.getElementById("reset").onclick = reset;
}

function run(x) {
  document.getElementById("inpt").value += x.toString();
}
function reset() {
  document.getElementById("inpt").value = "";
}

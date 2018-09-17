window.onload = startUp;

function startUp() {
    document.getElementById("run").onclick = run;
}

function reset() {
    document.getElementById("result").innerHTML = "";
}

function run() {
    reset();
    var i = Number(document.getElementById("i").value);
    var j = Number(document.getElementById("j").value);
    var k = Number(document.getElementById("k").value);
    var t = Number(document.getElementById("t").value);
    loop(i,j,k,t);
}

function loop(i,j,k,t) {
    var tall = 0;
    for(let x=i;x<1000;x+=t*100) {
        for(let y=j;y<100;y+=t*10) {
            for(let z=k;z<10;z+=t) {
                tall = x+y+z;
                console.log(tall);
                document.getElementById("result").innerHTML += tall + ", ";
            }
        }
    }
}

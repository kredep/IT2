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
    var tall = i*100+j*10+k;
    console.log(tall);
    for(let x=i*100;x<1000;x+=100) {
        for(let y=j*10;y<100;y+=10) {
            for(let z=k;z<10;z+=t) {
                tall = x+y+z;
                console.log(tall);
                document.getElementById("result").innerHTML += tall + ", ";
            }
        }
    }
}

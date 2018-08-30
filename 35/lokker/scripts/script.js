window.onload = startUp;

function startUp() {
    document.getElementById("oppg1").onclick = oppg1;
    document.getElementById("oppg2").onclick = oppg2;
    document.getElementById("oppg3").onclick = oppg3;
    document.getElementById("oppg4").onclick = oppg4;
    document.getElementById("oppg5").onclick = oppg5;
    document.getElementById("oppg6a").onclick = oppg6a;
    document.getElementById("oppg6b").onclick = oppg6b;
    document.getElementById("oppg6c").onclick = oppg6c;
    document.getElementById("oppg6d").onclick = oppg6d;
    document.getElementById("oppg6e").onclick = oppg6e;
}

function oppg1() {
    document.getElementById("result").innerHTML = "";
    var st = "";
    for(let i = 0;i<5;i++) {
        st += "*";
    }
    document.getElementById("result").innerHTML += st + "<br>";
}

function oppg2() {
    document.getElementById("result").innerHTML = "";
    for (let i = 0;i<4;i++) {
        var st = "";
        for (let x = 0;x<5;x++) {
            st += "*";
        }
        document.getElementById("result").innerHTML += st + "<br>";
    }
}

function oppg3() {
    document.getElementById("result").innerHTML = "";
    for (let i = 1;i<6;i++) {
        var st = "";
        for (let x = 0;x<i;x++) {
            st += "*";
        }
        document.getElementById("result").innerHTML += st + "<br>";
    }
}

function stars(x) {
    document.getElementById("result").innerHTML = "";
    for (let x=0;x<arguments.length;x++) {
        var st = "";
        for (let i = 0;i<arguments[x];i++) {
            st += "*";
        }
        document.getElementById("result").innerHTML += st + "<br>";
    }
}

function oppg4() {
    stars(5,1,3,1,5);
}

function oppg5() {
    document.getElementById("result").innerHTML = "";
    for(let x=0;x<5;x++) {
        var st = "";
        for(let i=5;i>x;i--) {
            st += "*";
        }
        document.getElementById("result").innerHTML = st + "<br>";
    }
}

function oppg6a() {
    document.getElementById("result").innerHTML = "";
    for(let i=1;i<100;i++) {
        document.getElementById("result").innerHTML += i + " ";
    }
}

function oppg6b() {
    document.getElementById("result").innerHTML = "";
    for(let i=1;i<100;i++) {
        if (i%2 == 0) {
            document.getElementById("result").innerHTML += i + " ";
        }
    }
}

function oppg6c() {
    document.getElementById("result").innerHTML = "";
    for(let i=1;i<100;i++) {
        if (i%2 != 0) {
            document.getElementById("result").innerHTML += i + " ";
        }
    }
}

function oppg6d() {
    document.getElementById("result").innerHTML = "";
    for(let i=1;i<100;i++) {
        if (i%5 == 0) {
            document.getElementById("result").innerHTML += i + " ";
        }
    }
}

function oppg6e() {
    document.getElementById("result").innerHTML = "";
    for(let i=1;i<100;i++) {
        if (i%2==0 && i%5==0) {
            document.getElementById("result").innerHTML += i + " ";
        }
    }
}

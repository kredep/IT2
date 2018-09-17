window.onload = startUp;

function startUp() {
    document.getElementById("oppg1").onclick = oppg1;
    document.getElementById("oppg2").onclick = oppg2;
    document.getElementById("oppg3").onclick = oppg3;
    document.getElementById("oppg4").onclick = oppg4;
    document.getElementById("oppg5").onclick = oppg5;
    document.getElementById("oppg6").onclick = oppg6;
    document.getElementById("oppg7").onclick = oppg7;
}

function reset() {
    document.getElementById("result").innerHTML = "";
}

function oppg1() {
    reset();
    var st = "";
    for(let i=1;i<100;i++) {
        st += i + ", ";
    }
    document.getElementById("result").innerHTML = st;
}

function oppg2() {
    reset();
    var st = "";
    for(let i=99;i>0;i--) {
        st += i + ", ";
    }
    document.getElementById("result").innerHTML = st;
}

function oppg3() {
    reset();
    var st = "";
    for(let i=2;i<100;i+=2) {
        st += i + ", ";
    }
    document.getElementById("result").innerHTML = st;
}

function oppg4() {
    reset();
    var st = "";
    for(let i=0;i<=100;i++) {
        st += i**2 + ", ";
    }
    document.getElementById("result").innerHTML = st;
}

function oppg5() {
    reset();
    var st = "";
    for(let i=1;i<10;i++) {
        for (let x=0;x<i;x++) {
            st += "*";
        }
        st += "<br>";
    }
    document.getElementById("result").innerHTML = st;
}

function stars(x) {
     /**
     * Man må ikke bruke if-setninger :)
     */
    document.getElementById("result").innerHTML = "";
    for (let x=0;x<arguments.length;x++) {
        var st = "";
        for (let i = 0;i<arguments[x];i++) {
            st += "*";
        }
        document.getElementById("result").innerHTML += st + "<br>";
    }
}

function oppg6() {
    stars(4,1,3,1,4);
}

function oppg7() {
    var st = "";
    var z = 0;
    for(let i=0;i<6;i++) {
        for(let x=0;x<(10-z)/2;x++) {
            st += "-";
        }
        for(let x=0;x<z;x++) {
            st += "*";
        }
        for(let x=0;x<(10-z)/2;x++) {
            st += "-";
        }
        z+=2;
        st += "<br>";
    }
    document.getElementById("result").innerHTML = st;
}

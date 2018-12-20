window.onload = startUp;

var julekuler;
var nisse;

function startUp() {
    julekuler = document.querySelectorAll('.light');
    nisse = document.getElementById("nisse");
    document.getElementById("gnome").onclick = function() { window.location.replace('https://www.youtube.com/watch?v=6n3pFFPSlW4') };
    setInterval(lys, 1000);
    setInterval(nisseRot, 1000);
    setInterval(gnome, 1000);
}

function lys() {
    for (var julekule of julekuler) {
        var tl = new TimelineLite();
        tl.add(TweenMax.to(julekule, Math.random() * 1+1, {opacity: 0}));
        tl.add(TweenMax.to(julekule, Math.random() * 1, {opacity: 1}));
    }
}

function nisseRot() {
    var tl = new TimelineLite();
    if (Math.floor(Math.random()*10) == 7) {
        tl.add(TweenMax.to(nisse,1,{rotation:360, transformOrigin:"50% 50%", ease:Linear.easeNone}));
    } else {
        tl.add(TweenMax.to(nisse,0.5,{rotation:5, transformOrigin:"50% 50%", ease:Linear.easeNone}));
        tl.add(TweenMax.to(nisse,0.5,{rotation:-5, transformOrigin:"50% 50%", ease:Linear.easeNone}));
    }
}

function gnome() {
    if (Math.floor(Math.random() * 30) == 1) {
        var y = Math.floor(Math.random() * window.innerHeight);
        var max = window.innerWidth - 100;
        var gnomed = document.getElementById("gnome");
        gnomed.style.visibility = "visible";
        gnomed.style.top = y + "px";
        var tl = new TimelineLite();
        tl.add(TweenMax.to(gnomed,2,{rotation: 360, x:0, x:max, ease:Linear.easeNone}));
        tl.add(TweenMax.to(gnomed,0.1,{opacity: 0}));
        tl.add(TweenMax.to(gnomed,0.1,{x:0}));
    }
}

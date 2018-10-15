window.onload = startUp;

var speed;
var iv;

function startUp() {
    submit.onclick = run;
}

function run() {
    clearInterval(iv);
    speed = document.getElementById("speed").value;
    animer();
    iv = setInterval(animer, speed*1000);
}

function animer() {
    TweenMax.to(spin1,speed,{rotation:360, transformOrigin:"50% 50%", ease:Linear.easeNone});
    TweenMax.to(spin2,speed,{rotation:360, transformOrigin:"50% 50%", ease:Linear.easeNone});
    TweenMax.set(spin1, {clearProps:"x"});
    TweenMax.set(spin2, {clearProps:"x"});
}

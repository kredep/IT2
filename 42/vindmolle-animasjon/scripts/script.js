window.onload = startUp;

var rpm;
var iv;
var speed;

function startUp() {
    submit.onclick = run;
}

function run() {
    clearInterval(iv);
    rpm = document.getElementById("rpm").value;
    speed = 60 / rpm;
    animer();
    iv = setInterval(animer, speed*1000);
}

function animer() {
    TweenMax.to(spin1,speed,{rotation:360, transformOrigin:"50% 50%", ease:Linear.easeNone});
    TweenMax.to(spin2,speed,{rotation:360, transformOrigin:"50% 50%", ease:Linear.easeNone});
    TweenMax.set(spin1, {clearProps:"x"});
    TweenMax.set(spin2, {clearProps:"x"});
}

window.onload = startUp;

var drawn = 0;
var interval;

function startUp() {
    var canvas = "myCanvas";
    var c = document.getElementById(canvas);
    var ctx = c.getContext("2d");
    document.getElementById(canvas).width = document.body.clientWidth;
    document.getElementById(canvas).height = document.body.clientHeight;
    interval = setInterval(generateCircles, 25);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function drawCircle(canvas, x, y, radius, color) {
    var c = document.getElementById(canvas);
    var ctx = c.getContext("2d");
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill();
}

function generateCircles() {
    if (drawn >= 500) {
        clearInterval(interval);
    } else {
        drawn++;
    }
    var canvas = "myCanvas";
    var x = random(0, document.body.clientWidth);
    var y = random(0, document.body.clientHeight);
    var radius = random(40,100);
    var color = "rgba(" + random(0,255) + "," + random(0,255) + "," + random(0,255) + ", 0.8)";
    drawCircle(canvas, x, y, radius, color);
}

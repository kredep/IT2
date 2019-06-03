window.onload = onLoad;

var canvas;
var ctx;
var r = 1;
var point = [0,0];
var iterations = 0;

function onLoad() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d');
    setInterval(iterate, 1);
}

function iterate() {
    for (let i = 0; i < 10; i++) {
        generate();
    }
}

function generate() {
    iterations++;
    showIterations();
    var rnd = Math.random();
    var nextPoint = [];
    if (rnd < 0.01) {
        nextPoint[0] = 0;
        nextPoint[1] = 0.16 * point[1];
    } else if (rnd < 0.86) {
        nextPoint[0] = 0.85 * point[0] + 0.04 * point[1];
        nextPoint[1] = -0.04 * point[0] + 0.85 * point[1] + 1.6;
    } else if (rnd < 0.93) {
        nextPoint[0] = 0.2 * point[0] - 0.26 * point[1];
        nextPoint[1] = 0.23 * point[0] + 0.22 * point[1] + 1.6;
    } else {
        nextPoint[0] = -0.15 * point[0] + 0.28 * point[1];
        nextPoint[1] = 0.26 * point[0] + 0.24 * point[1] + 0.44;
    }
    point = nextPoint;
    let x = canvas.width * (point[0]+3)/6;
    let y = canvas.height - canvas.height * ((point[1]+2) / 14);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
}

function showIterations() {
    document.getElementById("iterations").innerHTML = `Iterations: ${iterations}`;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*
    var canvas = document.getElementById("oppg1");
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.rect(20,200,660,230);
    ctx.fillStyle = 'rgb(200,0,0)';
    ctx.fillRect(20,200,660,230);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20,200);
    ctx.lineTo(350,20);
    ctx.lineTo(680,200);

    ctx.beginPath();
    ctx.arc(startPoints[i][0], startPoints[i][1], r, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
*/

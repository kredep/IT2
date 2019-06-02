window.onload = onLoad;

var canvasSize = 850;
var r = 1;
var canvas;
var ctx;
var pointA = [r,canvasSize-r];
var pointB = [canvasSize-r,canvasSize-r];
var pointC = [canvasSize/2,r];
var startPoints = [pointA, pointB, pointC];
var point = [];
var iterations = 1;

function onLoad() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d');

    for (var i = 0; i < startPoints.length; i++) {
        ctx.beginPath();
        ctx.arc(startPoints[i][0], startPoints[i][1], r, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
    }

    // First random point
    var r1 = Math.random();
    var r2 = Math.random();
    point[0] = Math.round((1 - Math.sqrt(r1)) * pointA[0] + (Math.sqrt(r1) * (1 - r2)) * pointB[0] + (Math.sqrt(r1) * r2) * pointC[0]);
    point[1] = Math.round((1 - Math.sqrt(r1)) * pointA[1] + (Math.sqrt(r1) * (1 - r2)) * pointB[1] + (Math.sqrt(r1) * r2) * pointC[1]);
    console.log(point);
    ctx.beginPath();
    ctx.arc(point[0], point[1], r, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();

    // iterate
    setInterval(iterate, 3);
}

function iterate() {
    var rnd = getRndInteger(0,2);
    var vec = vector(point, startPoints[rnd]);
    vec = [point[0]+Math.round(vec[0]*0.5),point[1]+Math.round(vec[1]*0.5)];
    point = vec;
    ctx.beginPath();
    ctx.arc(point[0], point[1], r, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    iterations++;
    showIterations();
}

function showIterations() {
    document.getElementById("iterations").innerHTML = `Iterations: ${iterations}`;
}

function vector(a,b) {
    // Returns vector
    return [b[0]-a[0],b[1]-a[1]];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

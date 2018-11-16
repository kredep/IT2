window.onload = startUp;

// vars
var canvas;
var ctx;
var dimentions = [0,0];
var tilesize = 50; // pixels
var lw = 2; // pixels
var centerCoord = [0,0]; // coordinates
var centerX;
var centerY;
var params = {
    "a": 1,
    "b": 1,
    "c": 1,
    "d": 0
};
var grade = 3;

function startUp() {
    dimentions[0] = document.getElementById("graphics").clientWidth;
    dimentions[1] = document.getElementById("graphics").clientHeight;
    centerX = Math.floor(dimentions[0]/2);
    centerY = Math.floor(dimentions[1]/2);
    update();
    changeInput();
    document.getElementById("up").onclick = up;
    document.getElementById("down").onclick = down;
    document.getElementById("left").onclick = left;
    document.getElementById("right").onclick = right;
    document.getElementById("tileinc").onclick = tileinc;
    document.getElementById("tiledec").onclick = tiledec;
    document.getElementById("functiongrade").onchange = changeInput;
    document.getElementById("plot").onclick = plot;
}
function changeInput() {
    var grade = Number(document.getElementById("functiongrade").value);
    if (grade == 1) {
        document.getElementById("function").innerHTML = 'f(x) = <input type="text" id="a" placeholder="a"> x + <input type="text" id="b" placeholder="b">';
    } else if (grade == 2) {
        document.getElementById("function").innerHTML = 'f(x) = <input type="text" id="a" placeholder="a"> x<sup>2</sup> + <input type="text" id="b" placeholder="b"> x + <input type="text" id="c" placeholder="c">';
    } else if (grade == 3) {
        document.getElementById("function").innerHTML = 'f(x) = <input type="text" id="a" placeholder="a"> x<sup>3</sup> + <input type="text" id="b" placeholder="b"> x<sup>2</sup> + <input type="text" id="c" placeholder="c"> x + <input type="text" id="d" placeholder="d">';
    }
}
function plot() {
    grade = Number(document.getElementById("functiongrade").value);
    var variables = ["a","b","c","d"];
    for (var i=0;i<=grade;i++) {
        params[variables[i]] = Number(document.getElementById(variables[i]).value);
    }
    update();
}
function up() {
    centerCoord[1]--;
    update();
}
function down() {
    centerCoord[1]++;
    update();
}
function left() {
    centerCoord[0]++;
    update();
}
function right() {
    centerCoord[0]--;
    update();
}
function tiledec() {
    tilesize--;
    update();
}
function tileinc() {
    tilesize++;
    update();
}
function update() {
    canvas = document.getElementById("graphics");
    ctx = canvas.getContext("2d");

    // Fill white
    ctx.beginPath();
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(0,0,dimentions[0],dimentions[1]);
    ctx.stroke();

    var origo = [
        centerX + centerCoord[0]*(tilesize+lw),
        centerY + centerCoord[1]*(-tilesize-lw)
    ];

    // Draw lines
    ctx.lineWidth = lw;
    var posX = origo[0];
    var posY = origo[1];
    ctx.strokeStyle = 'rgb(125,125,125)';
    while (posX < dimentions[0]) {
        ctx.beginPath();
        ctx.moveTo(posX,0);
        ctx.lineTo(posX,dimentions[1]);
        ctx.stroke();
        posX += tilesize;
    }
    posX = origo[0];
    while (posX > 0) {
        ctx.beginPath();
        ctx.moveTo(posX,0);
        ctx.lineTo(posX,dimentions[1]);
        ctx.stroke();
        posX -= tilesize;
    }
    while (posY < dimentions[1]) {
        ctx.beginPath();
        ctx.moveTo(0,posY);
        ctx.lineTo(dimentions[0],posY);
        ctx.stroke();
        posY += tilesize;
    }
    posY = origo[1];
    while (posY > 0) {
        ctx.beginPath();
        ctx.moveTo(0,posY);
        ctx.lineTo(dimentions[0],posY);
        ctx.stroke();
        posY -= tilesize;
    }
    // Draw axis
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.moveTo(origo[0], 0);
    ctx.lineTo(origo[0],dimentions[1]);
    ctx.moveTo(0, origo[1]);
    ctx.lineTo(dimentions[0], origo[1]);
    ctx.stroke();

    // Looping for every pixel
    var interval = tilesize+lw;
    var start = origo[0] - dimentions[0];
    var end = dimentions[0] - origo[0];
    var previousPoint = [];
    for (var i=start;i<end;i++) {
        var x = i/interval;
        if (grade == 1) {
            var y = firstgrade(x,params["a"],params["b"]);
        } else if (grade == 2) {
            var y = secondgrade(x,params["a"],params["b"],params["c"]);
        } else if (grade == 3) {
            var y = thirdgrade(x,params["a"],params["b"],params["c"],params["d"]);
        }
        var pixelWidth =  i + origo[0];
        var pixelHeight = origo[1] - Math.round((y*interval));
        ctx.beginPath();
        if (pixelWidth != 0) {
            ctx.moveTo(previousPoint[0],previousPoint[1]);
            ctx.lineTo(pixelWidth,pixelHeight);
        }
        ctx.lineWidth = lw*2;
        ctx.strokeStyle = 'rgb(0,0,255)';
        ctx.closePath();
        ctx.stroke();
        if (i % tilesize == 0) {
            ctx.beginPath();
            ctx.fillStyle = 'rgb(0,0,255)';
            ctx.arc(pixelWidth,pixelHeight,lw*3,0,2*Math.PI);
            ctx.fill();
        }
        previousPoint[0] = pixelWidth;
        previousPoint[1] = pixelHeight;
    }
}
function firstgrade(x,a,b) {
    return a*x+b;
}
function secondgrade(x,a,b,c) {
    return a*(x**2)+(b*x)+c;
}
function thirdgrade(x,a,b,c,d) {
    return a*(x**3)+b*(x**2)+c*x+d
}

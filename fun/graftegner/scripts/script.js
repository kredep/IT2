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
var zoom = 0;
var params = {
    "a": 1,
    "b": 3,
    "c": 0.2,
    "d": -2
};
var grade = 3;
var graphColor = "#FF0000";

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
    document.getElementById("color").onchange = color;
}

function color() {
    graphColor = document.getElementById("color").value;
    update();
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
    if (zoom > -44) {
        tilesize--;
        zoom--;
    }
    update();
}
function tileinc() {
    tilesize++;
    zoom++;
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
    ctx.strokeStyle = 'rgba(0,0,0,0.1)';
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

    // Draw axis numbers
    if (zoom > -30 ) {
        var inc = 1;
    } else {
        var inc = ((-Math.ceil(zoom/10)*10)/10 - 1);
    }
    var pX = origo[0];
    var current = 0;
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.font = 'bold 16px Arial';
    while (pX < dimentions[0]) {
        if (current != 0) {
            if (current > 9) {
                ctx.fillText(current, pX-7 , origo[1]-4);
            } else {
                ctx.fillText(current, pX-9 , origo[1]-4);
            }
        }
        current+=inc;
        pX += (tilesize*inc);
    }
    pX = origo[0];
    current = 0;
    while (pX > 0) {
        if (current != 0) {
            if (current < -9) {
                ctx.fillText(current, pX-13 , origo[1]-4);
            } else {
                ctx.fillText(current, pX-9 , origo[1]-4);
            }
        }
        current-=inc;
        pX -= (tilesize*inc);
    }
    var pY = origo[1];
    current = 0;
    while (pY < dimentions[1]) {
        if (current != 0) {
            ctx.fillText(current, origo[0]+5, pY+5);
        }
        current+=inc;
        pY += (tilesize*inc);
    }
    pY = origo[1];
    current = 0;
    while (pY > 0) {
        if (current != 0) {
            ctx.fillText(current, origo[0]+5, pY+3);
        }
        current-=inc;
        pY -= (tilesize*inc);
    }

    // Draw graph, looping for every pixel
    var interval = tilesize+lw;
    var start = centerX - dimentions[0] - (centerCoord[0]*(tilesize+lw));
    var end = dimentions[0] - centerX - (centerCoord[0]*(tilesize+lw));
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
        ctx.strokeStyle = graphColor;
        ctx.closePath();
        ctx.stroke();
        if (i % tilesize == 0) {
            ctx.beginPath();
            ctx.fillStyle = graphColor;
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

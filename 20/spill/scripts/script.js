window.onload = listen;

var size = 30; // cube width & height
var borderWidth = 2; // pixels
var xTiles = 36;
var yTiles = 18;
var speed = 1000;
var grid = [];
var snake = [];
snake[0] = [4,5];
snake[1] = [4,4];
snake[2] = [4,3];
snake[3] = [4,2];
snake[4] = [4,1];

var canvas;
var ctx;
var interval;
var rest = false;
var grow = false;
var apple;
var score = 0;
var dir = "down";
var fanfare = new sound("sounds/sm64_fanfare.wav");
document.addEventListener('keydown', function(event) {
    if (!rest) {
        if (event.keyCode == 38 || event.keyCode == 87) {
            // Up
            dir = "up";
        } else if (event.keyCode == 40 || event.keyCode == 83) {
            // Down
            dir = "down";
        } else if (event.keyCode == 39 || event.keyCode == 68) {
            // Right
            dir = "right";
        } else if (event.keyCode == 37 || event.keyCode == 65) {
            // Left
            dir = "left";
        }
    }
});

function listen() {
    document.getElementById("play").onclick = run;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generateApple() {
    var slots = grid.slice(0,grid.length-1);
    var overlapIndexes = [];
    let a = slots.length;
    for (let i=0;i<slots.length;i++) {
        for (let x=0;x<snake.length;x++) {
            if (slots[i][0] == snake[x][0] && slots[i][1] == snake[x][1]) {
                // overlap
                overlapIndexes.push(i);
            }
        }
    }
    for (let i=overlapIndexes.length-1;i>=0;i--) {
        slots.splice(overlapIndexes[i],1);
    }
    return slots[random(0,slots.length-1)];
}

function pos(p) {
    return p*(size+borderWidth);
}

function run() {
    size = Number(document.getElementById("size").value);
    xTiles = Number(document.getElementById("gridx").value);
    yTiles = Number(document.getElementById("gridy").value);
    speed = Number(document.getElementById("speed").value);

    canvas = document.getElementById("myGame");
    ctx = canvas.getContext("2d");

    var w = xTiles * size + (xTiles-2)*borderWidth
    var h = yTiles * size + (yTiles-2)*borderWidth
    document.getElementById("myGame").width = w;
    document.getElementById("myGame").height = h;

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = "white";

    // filling cubes
    for (let x=0;x<xTiles;x++) {
        for (let y=0;y<yTiles;y++) {
            //ctx.fillRect(x,y,width,height);
            ctx.fillRect(pos(x),pos(y),size,size);
            grid.push([x,y]);
        }
    }
    console.log(grid);
    apple = generateApple();
    move();
    interval = setInterval(move, speed);
}

function move() {

    if (rest == true) {
        rest = false;
    }

    // finding unmovable direction
    var prevDir = "";
    if (snake[0][1] == snake[1][1]+1) {
        prevDir = "up";
    } else if (snake[0][1]+1 == snake[1][1]) {
        prevDir = "down";
    } else if (snake[0][0] == snake[1][0]+1) {
        prevDir = "left";
    } else if (snake[0][0]+1 == snake[1][0]) {
        prevDir = "right";
    }

    // finding last cube
    var xLast = snake[snake.length-1][0];
    var yLast = snake[snake.length-1][1];

    // moving snake's body
    for (let s=snake.length-1;s>=1;s--) {
        snake[s][0] = snake[s-1][0];
        snake[s][1] = snake[s-1][1];
    }
    
    // finding next front tile
    if (dir == "down" && prevDir != "down") {
        snake[0][1] += 1;
    } else if (dir == "right" && prevDir != "right") {
        snake[0][0] += 1;
    } else if (dir == "up" && prevDir != "up") {
        snake[0][1] -= 1;
    } else if (dir == "left" && prevDir != "left") {
        snake[0][0] -= 1;
    } else if (prevDir == "down") {
        snake[0][1] -= 1;
        dir = "up";
    } else if (prevDir == "up") {
        snake[0][1] += 1;
        dir = "down";
    } else if (prevDir == "right") {
        snake[0][0] -= 1;
        dir = "left";
    } else if (prevDir == "left") {
        snake[0][0] += 1;
        dir = "right";
    }

    // checking if snake is out of bounds
    if (snake[0][1] < 0) {
        console.log("here");
        snake[0][1] = yTiles-1;
        rest = true;
    } else if (snake[0][1] > yTiles-1) {
        snake[0][1] = 0;
        rest = true;
    } else if (snake[0][0] < 0) {
        snake[0][0] = xTiles-1;
        rest = true;
    } else if (snake[0][0] > xTiles) {
        snake[0][0] = 0;
        rest = true;
    }

    // checking if hit self
    for (let p=1;p<snake.length;p++) {
        if (snake[0][0] == snake[p][0] && snake[0][1] == snake[p][1]) {
            console.log("GAME OVER!");
            clearInterval(interval);
            document.getElementById("score").innerHTML = "GAME OVER! HIGH SCORE: " + score;
            return;
        }
        if (snake[0][0] == apple[0] && snake[0][1] == apple[1]) {
            // hit apple
            grow = true;
        }
    }

    //erasing last cube
    if (!grow) {
        ctx.fillStyle = "white";
        ctx.fillRect(pos(xLast),pos(yLast),size,size);
    } else {
        snake.push([xLast,yLast]);
        apple = generateApple();
        score += 1;
        if (score % 5 == 0) {
            // play fanfare
            fanfare.play();
        }
        document.getElementById("score").innerHTML = "Score: " + score;
        clearInterval(interval);
        speed = Math.floor(speed/1.01);
        interval = setInterval(move, speed);
        grow = false;
    }

    // drawing apple
    ctx.fillStyle = "red";
    ctx.fillRect(pos(apple[0]),pos(apple[1]),size,size);

    // drawing cubes
    for (let i=0;i<snake.length;i++) {
        if (i == 0) {
            ctx.fillStyle = "rgb(32, 188, 84)";
        } else {
            ctx.fillStyle = "rgb(27, 132, 62)";
        }
        let x = pos(snake[i][0]);
        let y = pos(snake[i][1]);
        ctx.fillRect(x,y,size,size);
    }
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.play = function() {
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

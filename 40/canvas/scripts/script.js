window.onload = startUp;

function startUp() {
    draw1();
    draw2();
    draw3();
}
function draw1() {
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
    ctx.fillStyle = 'rgb(20,200,150)';
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(80,250,140,140);
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(80,250,140,140);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150,250);
    ctx.lineTo(150,390);
    ctx.moveTo(80,320);
    ctx.lineTo(220,320);
    ctx.stroke();
    ctx.rect(450,250,100,180);
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(450,250,100,180);
    ctx.stroke();
}
function draw2() {
    var canvas = document.getElementById("oppg2");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 3;

    for (let i=1;i<6;i++) {
        ctx.beginPath();
        ctx.arc(250, 250, i*20, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
function draw3() {
    var canvas = document.getElementById("oppg3");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = 'rgb(218, 224, 179)';
    ctx.fillRect(0,0,600,600);
    ctx.lineWidth = 4;

    for (let i=1;i<15;i++) {
        var grd = (15-i) / 14;
        if (i%2!=0) {
            var rgba = 'rgba(0,255,0,' + grd + ')';
        } else {
            var rgba = 'rgba(255,0,0,' + grd + ')';
        }
        console.log(rgba);
        ctx.beginPath();
        ctx.strokeStyle = rgba;
        ctx.arc(300, 300, i*17, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
    }
}

window.onload = startUp;

var speed = 0.01;
var timer = 0;
var colors = [];
var i = 0;
var speed = 1;

function startUp() {
    createDisco();
    console.log(colors);
    setInterval(doDisco, 10);
}

function createDisco() {
    for (let g=0;g<=255;g++) {
        if (g < 255) {
            rgb = "rgb(255," + g + ",0)"
            colors.push(rgb);
        } else {
            for (let r=255;r>=0;r--) {
                if (r > 0) {
                    rgb = "rgb(" + r + ",255,0)";
                    colors.push(rgb);
                } else {
                    for (let b=0;b<=255;b++) {
                        if (b < 255) {
                            rgb = "rgb(0,255," + b + ")";
                            colors.push(rgb);
                        } else {
                            for (let g=255;g>=0;g--) {
                                if (g > 0) {
                                    rgb = "rgb(0," + g + ",255)";
                                    colors.push(rgb);
                                } else {
                                    for (let r=0;r<=255;r++) {
                                        if (r < 255) {
                                            rgb = "rgb(" + r + ",0,255)";
                                            colors.push(rgb);
                                        } else {
                                            for (let b=255;b>=0;b--) {
                                                rgb = "rgb(255,0," + b + ")";
                                                colors.push(rgb);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function doDisco() {
    if (i < colors.length) {
        document.body.style.backgroundColor = colors[i];
        i+=speed;
    } else {
        i = 0;
        document.body.style.backgroundColor = colors[i];
    }
    document.getElementById("rgb").innerHTML = colors[i];
}

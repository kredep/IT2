/* messy code */
window.onload = startUp;

var array = [1,2,3,4,5,6,7,8,9,10];
var ars;
var current = 0;
var iv;
var colors = [];
var hist = [];

function startUp() {
    for (var i = 0; i < 10; i++) {
        document.getElementById("wrapper").innerHTML += '<div class="box"></div>';
    }
    ars = shuffle(array.slice(0,array.length));
    var boxes = document.querySelectorAll('.box');
    var i = 0;
    for (var box of boxes) {
        box.style.height = array[i] * 40 + "px";
        box.innerHTML = array[i];
        box.style.backgroundColor = colors[0][i];
        i++;
    }
    setTimeout(function () {
        var boxes = document.querySelectorAll('.box');
        var i = 0;
        for (var box of boxes) {
            box.style.height = ars[0][i] * 40 + "px";
            box.innerHTML = ars[0][i];
            box.style.backgroundColor = "white";
            i++;
        }
        document.getElementById("history").innerHTML += "<li>" + hist[0] + "</li>";
    }, 3000);
    iv = setInterval(visualize, 5000);
}

function visualize() {
    if (current < 9) {
        var boxes = document.querySelectorAll('.box');
        var i = 0;
        for (var box of boxes) {
            box.style.height = ars[current][i] * 40 + "px";
            box.innerHTML = ars[current][i];
            if (current < 8) {
                box.style.backgroundColor = colors[current+1][i];
            }
            i++;
        }
        if (current < 8) {
            setTimeout(function () {
                var boxes = document.querySelectorAll('.box');
                var i = 0;
                for (var box of boxes) {
                    box.style.height = ars[current][i] * 40 + "px";
                    box.innerHTML = ars[current][i];
                    box.style.backgroundColor = "white";
                    i++;
                }
                document.getElementById("history").innerHTML += "<li>" + hist[current] + "</li>";
                if (current == 8) {
                    document.getElementById("state").innerHTML = "Shuffle finished!";
                }
            }, 3000);
        }
        current++;
    } else {
        clearInterval(iv);
    }
}

function shuffle(a) {
    var j, x, i;
    var arrays = [];
    for (i = a.length - 1; i > 0; i--) {
        var color = new Array(10).fill("white");
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        color[i] = "#FFA07A";
        a[i] = a[j];
        a[j] = x;
        color[j] = "#00BFFF";
        console.log(a);
        colors.push(color.slice(0,color.length));
        arrays.push(a.slice(0,a.length));
        hist.push(a[j] + " swapped with " + a[i]);
    }
    return arrays;
}

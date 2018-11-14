window.onload = startUp;

var timer = 0;
var intervalTime = 10 * 1000; // ms

var urls = [
    "https://i.imgur.com/rIgX9wA.jpg",
    "https://i.imgur.com/Ppzf07Z.jpg"
];

function startUp() {
    wallpaperChange();
    setInterval(wallpaperChange, intervalTime);
}

function wallpaperChange() {
    for (let i=0;i<urls.length;i++) {
        if (timer == i) {
            document.getElementById("bdy").style.backgroundImage = 'url(' + urls[i] + ')';
            if (i == timer.length-1) {
                timer = -1;
            }
        }
    }
    timer++;
}

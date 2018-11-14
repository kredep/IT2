window.onload = startUp;

var timer = 0;
var intervalTime = 10 * 1000; // ms

var urls = [
    "https://i.imgur.com/rIgX9wA.jpg",
    "http://bevilacqua.me/images/images-beautiful-scenery-impremedia-net__aHR0cHM6Ly9qb29pbm4uY29tL2ltYWdlcy9iZWF1dGlmdWwtc2NlbmVyeS02LmpwZw==.jpg"
];

function startUp() {
    wallpaperChange();
    setInterval(wallpaperChange, intervaltime);
}

function wallpaperChange() {
    for (let i=0;i<urls.length;i++) {
        if (timer == i) {
            document.getElementById("bdy").style.backgroundImage = 'url(' + url[i] + ')';
        } else if (timer == urls.length) {
            timer = 0;
        }
    }
    timer += 1;
}

window.onload = startUp;

var index = 0;
var interval;
var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];

function startUp() {
    timer();
    var interval = setInterval(timer, 2000);
}

function timer() {
    var wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = '<img src="images/' + images[index] + '" alt="Et bilde">'
    index++;
    if (index == images.length) {
        index = 0;
    }
}

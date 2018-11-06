window.onload = startUp;

var time = 0;
var interval;

function startUp() {
    timer();
    var interval = setInterval(timer, 1000);
}

function timer() {
    var image = document.getElementById("image");
    var usage = document.getElementById("usage");
    var nrg = document.getElementById("nrg");

    if (time == 0) {
        image.style.backgroundImage = 'url(images/sleep.jpg)';
        usage.innerHTML = "Energiforbruk: 90 kcal/time";
        nrg.style.width = (90/120) * 700 + "px";
    } else if (time == 4) {
        image.style.backgroundImage = 'url(images/school.jpg)';
        usage.innerHTML = "Energiforbruk: 110 kcal/time";
        nrg.style.width = (110/120) * 700 + "px";
    } else if (time == 7) {
        image.style.backgroundImage = 'url(images/freetime.jpg)';
        usage.innerHTML = "Energiforbruk: 120 kcal/time";
        nrg.style.width = 700 + "px";
    } else if (time == 9) {
        image.style.backgroundImage = 'url(images/rest.jpg)';
        usage.innerHTML = "Energiforbruk: 110 kcal/time";
        nrg.style.width = (110/120) * 700 + "px";
    } else if (time == 12) {
        time = 0;
    }
    time++;
}

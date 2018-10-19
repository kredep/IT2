window.onload = startUp;

var counter = -1;
var i = 0;
var prev = -1;

// Tidsbruk
var tidsbruk = [4,3,2,3];

// Navn på bildefiler
var bilder = ["sleep.jpg", "school.jpg", "freetime.jpg", "rest.jpg"];

// Kaloribruk (kcal)
var calories = [90, 110, 130, 110];

function startUp() {
    TweenMax.to(image,0.25,{opacity: 0, delay: 4 - 0.25});
    faser();
    setInterval(faser, 1000);
}

function faser() {
    counter += 1;
    if (counter >= 0 && counter < 4) {
        // Sleep
        prev = i;
        i = 0;
    } else if (counter >= 4 && counter < 7) {
        // School
        prev = i;
        i = 1;
    } else if (counter >= 7 && counter < 9) {
        // Freetime
        prev = i;
        i = 2;
    } else if (counter >= 9 && counter < 12) {
        // Rest
        prev = i;
        i = 3;
    } else if (counter >= 12) {
        counter = 0;
        i = 0;
    }
    if (prev != i) {
        TweenMax.set(image,{attr:{src: "images/" + bilder[i]}});
        document.getElementById("nrg").innerHTML = "Energiforbruk: " + calories[i] + " kcal / time";
        TweenMax.to(image,0.25,{opacity: 1});
        TweenMax.to(image,0.25,{opacity: 0, delay: tidsbruk[i] - 0.25});
    }
}

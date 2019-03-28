window.onload = startUp;

function startUp() {
    const bilde1 = document.querySelector("#bilde1");
    const bilde2 = document.querySelector("#bilde2");
    const bilde3 = document.querySelector("#bilde3");
    const bilde4 = document.querySelector("#bilde4");

    var box = document.querySelector("#multimedia");

    bilde1.addEventListener("click", function() {
        box.innerHTML = `<video id="media" width="600" controls autoplay>
                        <source src="media/gnomed.mp4" type="video/mp4">
                        </video>`;
        document.getElementById("media").volume = 0.2;
    });

    bilde2.addEventListener("click", function() {
        box.innerHTML = `<audio id="media" controls autoplay>
                        <source src="media/777.mp3" type="audio/mpeg">
                        </audio>`;
        document.getElementById("media").volume = 0.2;
    });
    
    bilde3.addEventListener("click", function() {
        box.innerHTML = `<video id="media" width="400" controls autoplay>
                        <source src="media/dejavu.mp4" type="video/mp4">
                        </video>`;
        document.getElementById("media").volume = 0.05;
    });

    bilde4.addEventListener("click", function() {
        box.innerHTML = `<audio id="media" controls autoplay>
                        <source src="media/vacation.mp3" type="audio/mpeg">
                        </audio><br><br><br>
                        <img src="https://cdn.betterttv.net/emote/566c9fde65dbbdab32ec053e/2x"><img src="https://cdn.betterttv.net/emote/55b6f480e66682f576dd94f5/2x">`;
        document.getElementById("media").volume = 0.1;
    });
}

/* Autoplay fungerer vanligvis ikke i Chrome */
window.onload = haldenAnimasjon;

var index = 0; // sekunder
var bilder = [
    'bade.jpg',
    'bybilde.jpg',
    'festningen.jpg',
    'havna.jpg',
    'kveld_halden.jpg'
];
var video = 'Halden.mp4';
var iv;

function haldenAnimasjon() {
    index = 0;
    timer();
    iv = setInterval(timer, 2500);
}

function timer() {
    var body = document.body;
    if (index >= 0 && index <= 4) {
        body.innerHTML = '<img src="multimedia/' + bilder[index] + '">';
    } else {
        clearInterval(iv);
        body.innerHTML = `  <video id="video" controls autoplay>
                                <source src="multimedia/` + video + `" type="video/mp4"></source>
                            </video>`;
        document.querySelector('#video').onended = function() {
            document.body.innerHTML = '<input id="gjenta" type="button" value="Start animasjon på nytt">';
            document.querySelector('#gjenta').onclick = haldenAnimasjon;
        };
    }
    index++;
}

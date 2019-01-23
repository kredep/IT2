window.onload = onLoad;

var tall = [10, 20, 40, 80, 200, 400, 800, 1000];
var forsøk = 0;
var vunnet = 0;

function onLoad() {
    document.querySelector('#spin').onclick = jackpot;
}

function jackpot() {
    if (!run) {
        forsøk++;
        var jackpotTall = [];
        var str = '';
        var win = false;
        for (var i = 0; i < 3; i++) {
            var trekk = tall[randomInt(0, (tall.length-1))];
            jackpotTall.push(trekk);
            if (i == 0) {
                str += trekk;
            } else {
                str += ' ' + trekk;
            }
        }
        if (jackpotTall[0] === jackpotTall[1] && jackpotTall[0] === jackpotTall[2]) {
            var melding = 'gratulerer! du fikk jackpot!';
            win = true;
            vunnet++;
        } else {
            var melding = 'prøv igjen!';
        }
        document.querySelector('#lyd').innerHTML = `<audio id="media" autoplay>
                                                        <source src="sounds/roll.mp3" type="audio/mpeg">
                                                    </audio>`;
        document.querySelector('#media').volume = 0.02;
        document.querySelector('#statistikk').innerHTML = `Forsøk: ${forsøk}<br>Vunnet: ${vunnet}`;
        doEffect(str, melding, win);
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

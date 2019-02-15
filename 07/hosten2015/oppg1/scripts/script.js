window.onload = onLoad;

var bilder = [
    '1.jpg','2.jpeg',
    '3.jpg','4.jpg',
    '5.jpg','6.jpg',
    '7.jpg','8.jpg',
    '9.jpg','10.png',
    '11.jpg','12.jpg',
    '13.jpg', '14.jpg'
];
var tekst = [
    'kunne inspirere, utfordre og formidle kunnskap',
    'stort arbeidsmarked',
    'arbeider med fag og mennesker',
    'samfunnsengasjement',
    'formidle, kommunisere og motivere',
    'evne til å lede og samarbeide',
    'studieopphold i utlandet'
];
var bildeIndex = 0;
var tekstIndex = 0;

function onLoad() {
    animasjon();
    setInterval(animasjon, 2000);
};

function animasjon() {
    document.querySelector('#banner').style.backgroundImage = `url(multimedia/${bilder[bildeIndex]})`;
    document.querySelector('#banner').innerHTML = tekst[tekstIndex].toUpperCase();
    bildeIndex++;
    tekstIndex++;
    if (bildeIndex >= bilder.length) { bildeIndex = 0; }
    if (tekstIndex >= tekst.length) { tekstIndex = 0; }
}

window.onload = onLoad;

var abc = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å".split(' ');
var arr1 = {A:"gale", B:"snartenkte", C:"stinkende", D:"rykende", E:"rare", F:"flinke", G:"tøffe", H:"rotete", I:"skeptiske", J:"geniale", K:"stille", L:"lystige", M:"lilla", N:"grønne", O:"ovale", P:"prikkete", Q:"kurvete", R:"ristende", S:"skumle", T:"teite", U:"uglete", V:"vridde", W:"friske", X:"ekstatiske", Y:"klare", Z:"ruskete", Æ:"intergalaktiske", Ø:"skinnende", Å:"glatte"}; 
var arr2 = {A:"buss", B:"nese", C:"glass", D:"tomat", E:"tast", F:"knapp", G:"bryter", H:"ark", I:"konvolutt", J:"kniv", K:"bil", L:"båt", M:"fly", N:"smartbil", O:"enhjulsykkel", P:"mikrofon", Q:"slalomski", R:"støvler", S:"ring", T:"kost", U:"ulv", V:"tau", W:"sko", X:"stol", Y:"mus", Z:"katt", Æ:"hund", Ø:"menneske", Å:"ape"}; 
var arr3 = {A:"muffins", B:"tastatur", C:"kopp", D:"vase", E:"skriftenøkkel", F:"pute", G:"sykkelpumpe", H:"ford", I:"fjernkontroll", J:"mareritt", K:"toyota", L:"prosjektor", M:"skjerm", N:"finger", O:"ostekake", P:"gulrotkake", Q:"brød", R:"bark", S:"reke", T:"volvo", U:"sjørøver", V:"svamp", W:"sjøstjerne", X:"kjeks", Y:"skinke", Z:"sofa", Æ:"lønnsslipp", Ø:"avocado", Å:"ål"};
var res_Prove1 = [1,4,2,6,3,6];
var res_Prove2 = [1,2,2,5,5,4]; 
var res_Eksamen = [2,4,1,2,4,4];

function onLoad() {
    oppg1();
    document.querySelector('#send').onclick = oppg2;
    oppg3();
}

function oppg1() {
    for (var i=0;i<abc.length;i++) {
        var str = "";
        for (var x=0;x<i+1;x++) {
            str += abc[i];
        }
        str += "<br>";
        document.querySelector('#oppg1').innerHTML += str;
    }
}

function oppg2() {
    var fornavn = document.querySelector('#fornavn').value;
    var etternavn = document.querySelector('#etternavn').value;
    if (fornavn == "" || etternavn == "") {
        document.querySelector('#oppg2').innerHTML = 'Sjekk input';
    } else {
        var navn = fornavn + etternavn;
        var errors = false;
        for (var i=0;i<navn.length;i++) {
            if (!abc.includes(navn[i].toUpperCase())) {
                errors = true;
            }
        }
        if (errors) {
            document.querySelector('#oppg2').innerHTML = `Ulovlige karakterer`;
        } else {
            var førsteFornavn = fornavn[0].toUpperCase();
            var førsteEtternavn = etternavn[0].toUpperCase();
            var sisteEtternavn = etternavn[etternavn.length-1].toUpperCase();
            document.querySelector('#oppg2').innerHTML = `Ditt nye kallenavn er: ${arr1[førsteEtternavn]} ${arr2[førsteEtternavn]+arr3[sisteEtternavn]}`;
        }
    }
}

function oppg3() {
    var grupper = {
        "Bedre": 0,
        "Likt": 0,
        "Dårligere": 0
    };
    for (var i=0;i<res_Eksamen.length;i++) {
        var prøveSnitt = ((res_Prove1[i] + res_Prove2[i])/2).toFixed(1);
        var eksamen = res_Eksamen[i];
        if (prøveSnitt == eksamen) {
            grupper["Likt"]++;
        } else if (prøveSnitt > eksamen) {
            grupper["Dårligere"]++;
        } else if (prøveSnitt < eksamen) {
            grupper["Bedre"]++;
        }
    }
    for (gruppe in grupper) {
        document.querySelector('#oppg3').innerHTML += `${gruppe}: ${grupper[gruppe]}<br>`;
    }
}

window.onload = startUp;

function startUp() {
    document.querySelector('#fredrikstad').onclick = fredrikstad;
    document.querySelector('#halden').onclick = halden;
}

function fredrikstad() {
    window.open('fredrikstad.html');
}

function halden() {
    window.open('halden.html');
}

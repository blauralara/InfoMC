document.getElementById("form").addEventListener('submit', prevent_reload);
var termekek = [];
function main() {
    uj_termek();
    termekek_kiiratas();
    if (termekek.length > 4) {
        document.getElementById("legolcsobb").innerHTML = legolcsobb().neve;
        document.getElementById("atlag").innerHTML = String(atlag());
        document.getElementById("szoras").innerHTML = String(szoras());
    }
}
function uj_termek() {
    var name = document.getElementById("Name").value;
    var price = Number(document.getElementById("Price").value);
    var aru = { neve: name, ara: price };
    termekek.push(aru);
}
function termekek_kiiratas() {
    var termek_lista = "";
    for (var i = 0; i < termekek.length; i++) {
        termek_lista += '<p><span class="termekek"> ~ Neve:&emsp;' + termekek[i].neve + '&emsp; Ára:&emsp;' + termekek[i].ara + '</span></p>';
    }
    document.getElementById("eddigi").innerHTML = termek_lista;
}
function legolcsobb() {
    var legolcsobb = termekek[0];
    for (var i = 1; i < termekek.length; i++) {
        if (legolcsobb.ara > termekek[i].ara) {
            legolcsobb = termekek[i];
        }
    }
    return legolcsobb;
}
function atlag() {
    var atlag = 0;
    for (var i = 0; i < termekek.length; i++) {
        atlag += termekek[i].ara;
    }
    atlag = atlag / termekek.length;
    return Math.round(atlag * 100) / 100;
}
function szoras() {
    var arak = [];
    for (var i = 0; i < termekek.length; i++) {
        arak[i] = termekek[i].ara;
    }
    var n = arak.length;
    var atlag = arak.reduce(function (a, b) { return a + b; }) / n;
    var szoras = Math.sqrt(arak.map(function (x) { return Math.pow(x - atlag, 2); }).reduce(function (a, b) { return a + b; }) / n);
    return Math.round(szoras * 100) / 100;
}
function prevent_reload(e) {
    e.preventDefault();
}

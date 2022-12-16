document.getElementById("form")!.addEventListener('submit', prevent_reload);

let termekek: termek[] = [];

function main() {
    uj_termek();
    termekek_kiiratas();

    if(termekek.length > 4) {
        (document.getElementById("legolcsobb") as HTMLElement).innerHTML = legolcsobb().neve;
        (document.getElementById("atlag") as HTMLElement).innerHTML = String(atlag());
        (document.getElementById("szoras") as HTMLElement).innerHTML = String(szoras());
    }
}

function uj_termek() {
    let name = (document.getElementById("Name") as HTMLInputElement).value;
    let price = Number((document.getElementById("Price") as HTMLInputElement).value);
    let aru = {neve: name, ara: price};
    termekek.push(aru);
}

function termekek_kiiratas() {
    let termek_lista: string = "";
    for(let i=0; i<termekek.length; i++) {
        termek_lista += '<p><span class="termekek"> ~ Neve:&emsp;' + termekek[i].neve + '&emsp; Ára:&emsp;' + termekek[i].ara + '</span></p>';
    }
    document.getElementById("eddigi")!.innerHTML = termek_lista;
}

function legolcsobb(): termek {
    let legolcsobb = termekek[0];
    for(let i=1; i<termekek.length; i++) {
        if(legolcsobb.ara > termekek[i].ara) {
            legolcsobb = termekek[i];
        }
    }
    return legolcsobb;
}

function atlag(): number {
    let atlag = 0;
    for(let i=0; i<termekek.length; i++) {
        atlag += termekek[i].ara;
    }
    atlag = atlag / termekek.length;
    return Math.round(atlag * 100) / 100;
}

function szoras (): number {
    let arak :number[] = [];
    for(let i=0; i<termekek.length; i++) {
        arak[i] = termekek[i].ara;
    }
    const n = arak.length;
    const atlag = arak.reduce((a, b) => a + b) / n;
    const szoras = Math.sqrt(arak.map(x => Math.pow(x - atlag, 2)).reduce((a, b) => a + b) / n);
    return Math.round(szoras * 100) / 100; 
}

function prevent_reload(e: SubmitEvent) {
    e.preventDefault();
}

type termek = {
    neve: string;
    ara: number;
}


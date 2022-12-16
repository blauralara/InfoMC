//Elso modszer
function paralelogramma_terulete_magassag(alap, magassag) {
    return alap * magassag;
}
//Masodik modszer
function paralelogramma_terulete_szog(alap1, alap2, kozbezart_szog) {
    return (Math.round((alap1 * alap2 * Math.abs(Math.sin(radianba(kozbezart_szog)))) * 100) / 100);
}
//Helper function
function radianba(szog) {
    return szog * (Math.PI / 180);
}

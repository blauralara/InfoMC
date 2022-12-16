//Elso modszer
function paralelogramma_terulete_magassag(alap: number, magassag: number): number {
    return alap * magassag;
}

//Masodik modszer
function paralelogramma_terulete_szog(alap1: number, alap2: number, kozbezart_szog: number): number {
    return (Math.round((alap1 * alap2 * Math.abs(Math.sin(radianba(kozbezart_szog)))) * 100) / 100);
}

//Helper function
function radianba(szog: number): number {
    return szog * (Math.PI / 180);
  }
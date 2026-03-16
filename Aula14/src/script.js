// Definindo uma array global
const times = ["São Paulo", "Corinthians", "Flamengo","Fluminense"];

// utilizando o método indexOf()
let posicaoItem = times.indexOf("Flamengo");

console.log(times);
console.log(posicaoItem);

// Utilizando o método lastIndexOf()
const times2 = ["Corinthians", "São Paulo", "Corinthians", "Corinthians"];

let posicaoItem2 = times2.lastIndexOf("Corinthians");

console.log(times2);
console.log(posicaoItem2);

// Utilizando o método includes()
let verificaExistenciaItem = times.includes("palmeiras");

console.log(verificaExistenciaItem);

// Utilizando o método find ()
const number = [4, 6, 83, 64, 2, 17];
let encontrarMaior = number.find(verificaValor);

function verificaValor(valor){
    return valor > 50;
}

console.log(encontrarMaior);

// Utilizando método findIndex()
let encontrarIndice = number.findIndex
(verificaValor);

console.log(encontrarIndice);

// Utilizando o método findLast()
let encontrarMaiorFinal = number.findLast((x) => x > 50);

console.log(encontrarMaiorFinal);

// Utilizando o método findLastIndex()
let encontrarIndiceMaiorFinal = number.findLastIndex((valor) => valor > 50);

console.log(encontrarIndiceMaiorFinal);
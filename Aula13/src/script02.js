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
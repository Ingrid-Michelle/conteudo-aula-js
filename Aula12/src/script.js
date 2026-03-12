// Criando um construtor
function Pessoa(primeiroNome, ultimoNome, idade, pais) {
    this.primeiroNome = primeiroNome;
    this.ultimoNome = ultimoNome;
    this.idade = idade;
    this.pais = pais;
}

const euMesmo = new Pessoa("Ingrid", "Costa", "23", "Brasil");


const meuIrmao = new Pessoa("Anderson", "Leite", "25", "Brasil");

// console.log(euMesmo);
// console.log(meuIrmao);

// Reforçando criação de construtores de objetos
function veiculo(marca, modelo, motorPotencia, cor,ano, rodas ) {
    this.marca = marca;
    this.modelo = modelo;
    this.motorPotencia = motorPotencia;
    this.cor = cor;
    this.ano = ano;
    this.rodas = rodas;
    this.acelerar = function() {
        return this.modelo + " acelerou";
    }
}

const minhaMoto = new veiculo("Ducati", "Panigale", "216cv", "vermelha", 2019, 2);

console.log(minhaMoto);

const meuCarro = new veiculo("Porshe", "944 turbo", "240cv", "Branco", 1998, 4);

console.log(meuCarro);

meuCarro.placa = "000-000";

meuCarro.frear = function() {
    return this.modelo + " freou."
};

console.log(meuCarro.frear());

console.log(meuCarro.placa)

veiculo.prototype.parar = function() {
    return this.marca + " parou."
}

console.log(meuCarro.parar());
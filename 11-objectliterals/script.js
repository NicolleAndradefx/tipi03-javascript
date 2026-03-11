//object literals
const objetoPessoa = {
    nome: "João",
    idade: 30,
};

console.log(objetoPessoa);
console.log(typeof objetoPessoa);
console.log(objetoPessoa.nome);

//removendo uma propriedade de um objeto
delete objetoPessoa.idade
console.log(objetoPessoa);

//adicionando uma pripriedade ao objeto
objetoPessoa.sobrenome = "Santana";
console.log(objetoPessoa);

//Metedo assigns
const objeto1 = {
    nome: "Maria",
    idade: 22,
}

const objeto2 = {
    altura: 1.65,
    genero: "Feminino",
}

const objetoDestino = {};

Object.assign(objetoDestino, objeto1, objeto2);
console.log(objetoDestino);

//metodo keys
const chaves = Object.keys(objetoDestino);
console.log(chaves);

//mutação - atribuição
const hospede = {
    nome: "Alberto",
};

hospede.nome = "Junior";
console.log(hospede.nome);

//mutação - inserção
hospede.sobrenome = "Lima";
console.log(hospede);

//mutação - operador de adição
const hospedeNovo = {
    nome: "Priscila",
    idade: 42,
}

hospedeNovo.idade += 2;
console.log(hospedeNovo.idade);

//mutação - delete
delete hospedeNovo.nome;
console.log(hospedeNovo);

//desestruturando objetos
const usuarioA = {
    primeiroNome: "Pablo",
    sobrenome: "Xavier",
    profissao: "Pedreiro",
};

const[primeiroNome, sobrenome, profissao] = Object.values(usuarioA);
console.log(primeiroNome, sobrenome, profissao);
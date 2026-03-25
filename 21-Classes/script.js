//Classe
class Pessoa {

    //atributos
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    //método
    saudacao(){
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}


//instância
const pessoa1 = new Pessoa("Ana", 20);
const pessoa2 = new Pessoa("Grazi",41);
console.log(pessoa1.saudacao());
console.log(pessoa2.saudacao());

//Nova Classe - encapsulamento
class PessoaNova{
    constructor(nome, idade){
        this._nome = nome;
        this._idade = idade;
    }
 
    get nome(){
        return this._nome;
    }
 
    set nome(novoNome){
        this._nome = novoNome;
    }
}
 
let pessoa = new PessoaNova("Ana", 20);
console.log(pessoa.nome);
pessoa.nome = "Maria";
console.log(pessoa.nome);
 
//Classe com herança
class Animal {
    constructor(nome){
        this.nome = nome;
    }
 
    fazerSom(){
        console.log("O animal faz um som.");
    }
}
 
//subclasse
class Cachorro extends Animal{
    fazerSom(){
    console.log(`O cachorro ${this.nome} late.`);
    }
}
 
let rex = new Cachorro("Rex");
rex.fazerSom(); //polimorfismo
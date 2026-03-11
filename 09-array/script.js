//array
const nomes = ["João", "Maria", "José"];

console.log(nomes);
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]); //essa posição não existe(underfined)

//Adicionando um elemento no array
nomes.push("Beatriz");
console.log(nomes);
 
//Removendo o último elemento do array
nomes.pop();
console.log("Beatriz foi removida " + nomes);
 
//Alterar um elemento do array
nomes[0] = "João Pedro";
console.log(nomes);

//Concatenar dois arrays
const numeros =[6, 7, 8];
console.log(numeros.length);

const outrosNumeros = [3, 9, 2];
const juncaoNumeros = numeros.concat(outrosNumeros);
console.log(juncaoNumeros);


//removendo o primeiro elemento do array
const nomesNovos = ["Joaquina", "Felipe", "Plínio"];

const primeiroNome = nomesNovos.shift();
console.log(nomesNovos);
console.log(nomesNovos[0]);

// Adicionar um ou mais elemnetos no início do array
const numerosTeste = [1, 2, 3];

numerosTeste.unshift(0);
console.log(numerosTeste);

//Encontrar a primeira ocorrência do elemento especificado
const frutas = ["maçã", "banana", "manga", "abacaxi"];

console.log(frutas.indexOf("maçã"));
console.log(frutas.indexOf("laranja"));

// Encontrar a última ocorrência do elemento especificado
const letras = ["a", "b", "c", "a", "d"];

console.log(letras.lastIndexOf("a"));
console.log(letras.lastIndexOf("b"));
console.log(letras.lastIndexOf("z"));

// Verifica se um elemento está presente no array
const frutasDona = ["maçã", "banana", "laranja"];

const temMaca = frutasDona.includes("maçã");
const temMelancia = frutasDona.includes("melancia");
console.log(temMaca);
console.log(temMelancia);

//includes á partir de uma posição
const letrasNovo = ["a", "b", "c", "d", "a"];
const temAPos2 = letrasNovo.includes("b", 2);
console.log(temAPos2);

//revertendo array
const testandoReverse = [1, 2, 3, 4, 5];

testandoReverse.reverse();
console.log(testandoReverse);

//invertendo a ordem do array
const testandoSpread = ["a", "b", "c", "d", "e"];
console.log(testandoSpread);

const novaLetras = [...testandoSpread].reverse()
console.log(novaLetras);

//converte todas as letras de uma string para maiúsculas
const fraseA = "Boas vindas!";
const upper = fraseA.toUpperCase();
console.log(upper);

//converte todas as letras de uma string para minúsculas
const fraseB = "QUE LEGAL!"
const lower = fraseB.toLowerCase();
console.log(lower);

//array dinãmico (lista)
let frutasD = [];
frutasD.push("Maça");
frutasD.push("Uva");
frutasD.push("Manga");

for(let i = 0; i < frutasD.length; i++ ){
    console.log("Ìndice " + i + ": " + frutasD[i]);
}

//array bidimensional (Matriz)
let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

for(let b = 0; b < matriz.length; b++ ){
    for(let c = 0; c < matriz[b].length; c++){
        console.log("[" + b + "][" + c +"] = " + matriz[b][c]);
    }
    
}

//array associaivos (Object)
let usuario = {
    nome: "Ana",
    idade: 18,
    cidade: "São Paulo"
};

for(let chave in usuario) {
    console.log(chave + ": " + usuario[chave]);
}

//destruturar array
const novoArray = ["Natalia", "Eduarda", "Milena"];

const [primeira, segunda, terceira] = novoArray;
console.log(primeira, segunda, terceira);
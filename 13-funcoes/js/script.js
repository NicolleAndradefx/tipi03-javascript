//Funções

function minhaFuncao(){
    console.log("Teste de Função");
}

minhaFuncao();
minhaFuncao();//reaproveitando a função

//função na variável
const minhaFuncaonaVariavel = function(){
    console.log("Teste de função na variável");
}

minhaFuncaonaVariavel();

//função no parâmetro 
function funcaonoParametro(txt){
    console.log(`Exibindo ${txt}`);
}

funcaonoParametro("Teste de Função no parâmetro");
funcaonoParametro("testando novamente");

//return
const a = 5;
const b = 6;
const c = 10;
const d = 40;

function soma(n1, n2){
    return n1 + n2;
}

const resultado = soma(a, b); //a constante guarda o return da função
console.log(resultado);

console.log(soma(c, d)); //executa o return

//arrow fuction 
const quadrado = (numero) => numero * numero;

console.log(quadrado(5));

//mais uma arrow function
const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));

//arrow function de cima abreviada 
const raizQuadrada2 = (x) => x * x;
console.log(raizQuadrada2(5));


//Funções que retornam algo
function soma2 (m, n){
    return m + n;
}

const ehPar = (p) => p % 2 === 0;

console.log(soma2(3, 4));
console.log(ehPar(10));

//Funções que não retornam nada (void)
function mostraMensagem (){
    console.log("Olá, mundo!");
}

function mostraSoma (a, b){
    console.log("Soma = ", a + b);
}


mostraMensagem();
mostraSoma(3, 4);

//Funções com parâmetros
function saudar(nome){
    console.log(`Olá, ${nome}`)
}
function potencia(base, expoente = 2){
    return base ** expoente;
}

saudar("Ana");
console.log(potencia(5));
console.log(potencia(2, 3)); //sobreescrevendo o expoente original

//Função sem parâmetro e sem retorno
function exibaMensagem(){
    console.log("Boas vindas ao site!");
}

exibaMensagem();

//Função sem parâmetro, com retorno
function obterAnoAtual(){
    return new Date().getFullYear();
}

console.log(obterAnoAtual());

//Escopo aninhado
let o = 15;

function escopoAninhado(){
    let o = 30;

    if(true){
        let o = 35;

        if(true){
            let o = 40;
            console.log(o);
        }

        console.log(o);
    }
    
    console.log(o);
}

escopoAninhado();
console.log(o); //chamando a constatente inicial


//recurção
function fatorial(numero){
    if(numero <= 1){
        return 1;
    }else{
        return numero * fatorial(numero - 1);
    }
}
console.log(fatorial(0));
console.log(fatorial(5));
console.log(fatorial(4));
console.log(fatorial(3));

// fatorial(5)
// retornar 5 * fatorial(4)
// retornar 4 * fatorial(3)
// retornar 3 * fatorial(2)
// retornar 2 * fatorial(1)
// retornar 1 - return 1

// return 1
// fatorial(2) * 1 = 2 
// fatorial(3) * 2 = 6
// fatorial(4) * 6 = 24
// fatorial(5) * 24 = 120
// resultado da recurção = 120


//Conversão de tipo
let x = "10";
let y = "3.5";

let intero = parseInt(x);
let decimal = parseFloat(y);
let texto = String(100); //vai guarda (uma sring) "100"
let logico = Boolean(1); //1 = true, 0 = false

console.log(intero, decimal, texto, logico);

//rest operator
function novaFuncao(a, b, ...args){
    console.log(a);
    console.log(b);
    console.log(args);
}

novaFuncao(1, 2, 3, 4, 5);

//Funções matemáticas
let e = -10;
let f = 2.7;

console.log(Math.abs(e)); //valor absoluto (sem sinal)
console.log(Math.pow(2, 3)); //potência
console.log(Math.round(f)); // aproximadamente
console.log(Math.max(4, 9, 1)); //número maior / máximo
console.log(Math.min(4, 9, 1)); //número menor / mínimo

//funções de sequência/lista
const lista = [1, 2, 3, 4, 5];

console.log(lista.length); //comprimento
console.log(lista.reduce((a, b) => a + b)); //soma
console.log([...lista].sort((a, b) => a - b)); //ordeação decrescente

const dobrados = lista.map(g => g * 2); // aplica função em cada item
console.log(dobrados);

const paresNovos = lista.filter(h => h % 2 === 0) //aplica filtros nos itens
console.log(paresNovos);

//Função de depuração
let i = 10;
let j = "Ana"
let listaNova = [1, 2, 3];

console.log(typeof i);
console.log(typeof j);
console.log(typeof listaNova);

console.log(Object.getOwnPropertyNames(listaNova)); //irá aparecer os elementos + o listaNova sendo o comprimento então aparecerá um length
 
console.log(console.log.toString());
 
//Função de entrada de saída (não irá funcionar pois precisa de uma biblioteca)
// const readLine = require("readLine").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
 
// readLine.question("Digite seu nome: ", nome => {
//     readLine.question("Digite sua idade: ", idade => {
//         console.log("Nome> ", nome);
//         console.log("Idade: ", idade);
//         readLine.close();
//     });
// });
 
//Função de prompt
const nomeNovo2 = prompt("Qual o seu nome?");
console.log(nomeNovo2);
 
const idade = prompt("Qual a sua idade?");
console.log(idade);
 
//Função de alerta - exibe caixa de diálogo
alert("Erro ao preencher o formulário!");
 
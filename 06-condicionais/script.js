//if (se condição for verdadeira)
const numerico = 10;

if(numerico > 8){
    console.log("O numero informado é maior que 8");
}

const nomealuno = "Juliano"

if(nomealuno === "Juliano"){
    console.log("Ola Juliano ");
}
if(nomealuno === "Maria"){
    console.log("Ola Maria"); //perceba que esse bloco foi ignorado
}

//else (condição se falsa ou se aprimeira nao for atendida)
const logado = false;

if(logado){
    console.log("Esta logado!");
}
else{
    console.log("Não esta logado!");
}

const altura = 1.70;

if(altura > 1.80){
    console.log("Essa pessoa tem mais de 1,80 de altura");
}
else{
    console.log("Essa pessoa tem menos de 1,80 de altura");
}

const maioridade1 = "18 anos";
const habilitado = true

if(maioridade1 >= 18 && habilitado === false){
    console.log("Não habilitada")
}
else{
    console.log("Habilitada")
}

//else if (verificar varias condições)
const cachorro = "Pastor Alemão"
const nomedocachorro = "Zeca"

if(cachorro === "Dálmata"){
    console.log("É um dálmata!")
}
else if(nomedocachorro === "Zeca"){
    console.log("Se chama Zeca!")
}
else{
    console.log("É um poodle!")
}

if(1 > 2){
    console.log("Teste 1 é verdadeiro")
}
else if(2 > 4){
    ("Teste 2 é verdadeiro")
}
else if(4 < 7){
    console.log("Teste 3 é verdadeiro")
}
else{
    console.log("Não temos condição verdadeira")
}
//metodo string: trim
const textoEscapado = " Essa é uma string com espaços em branco ";

const textoSemEspacos = textoEscapado.trim();

console.log(textoSemEspacos);

//método padStart
const numero = "1234";

//preencher com zeros até atingir 8 caracteres
const numeroFormatado = numero.padStart(8, "0");
console.log(numeroFormatado);

const codigo = "ABC";

//preencher com traços para atingir 5 caracteres
const codigoPreenchido = codigo.padStart(5, "-");
console.log(codigoPreenchido);

//preenchimento no final padend
const codigoFinal = codigo.padEnd(5, "-");
console.log(codigoFinal);

//métod split - dividir uma string
const textoT = "Essa e uma string com para testar split";

//Divide a string em um array de palavras, usando espaços como esparadores
const palavras = textoT.split(" ");
console.log(palavras);

//Divide a string em um array de 3 elementos, usando espaços como esparadores
const partes = textoT.split(" ", 3);
console.log(partes);

//Divide a string em um array de palavras, usando espaços como esparadores
const numeros = "1,2,3,4,5".split(",");
console.log(numeros);

//método join
const numerosJoin = [1, 2, 3, 4, 5];

//Juntta os numeros com virgulas como separador
const listaNumeros = numerosJoin.join();
console.log(listaNumeros);

//Juntta os numeros com traços como separador
const listaNumerosTracos = numerosJoin.join("-");
console.log(listaNumerosTracos);

//Junsta elementos de um array de stings 
const frutas = ["maçã", "banana", "laranja"];
const textoFrutas = frutas.join(" e ");
console.log(textoFrutas);


//método repeat
const testandoRepeat = "Olá"

//Repetindo a string 3 vezes 
const textoReptido = testandoRepeat.repeat(3);
console.log(textoReptido);

//Repetindo a string 3 vezes 
const textoVazio = testandoRepeat.repeat(0);
console.log(textoVazio);
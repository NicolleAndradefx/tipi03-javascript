//while (enquanto)
let x = 1;

while(x <= 10){
    console.log(x);
    x = x + 1;
}

let y = 10;
while(y >= 5){
    console.log(y);
    y --; //decremento: o mesmo que y = y - 1;
}

//do while (fazer enquanto)
let m = 15;

do{
    console.log(`${m}`);
    m = m + 2;
}while(m <= 21);

//comparando while e do while
let n = 12;

while(n <= 10){
    console.log(n);
    n++; //incrimento
}

//executa pelo menos 1 vez antes do loop
do{
    console.log(n)
    n++;
}while(n <= 10);

//break
let contador = 0;

while(contador < 10){
    console.log("contador: " + contador);

    //interrompe o loop se o contador for igual a 5
    if(contador === 5){
        break;
    }

    contador++;
}

//for
for(i = 1; i <= 5; i++){
    console.log(i);
}

let j = 5;

for(j; j > 2; j--){
    console.log(j);
}

//continue
for(let k = 1; k <= 7; k++){
    if(k === 5){
        continue;
    }

    console.log(k); 
}

//percorrendo um array com loop for
const listNome = ["João", "Maria", "José"];

for(let p = 0; p < listNome.length; p++){
    console.log(listNome[p]);
}

//percorrendo uma array com loop forEach
listNome.forEach(function(nome) {
    console.log(nome);
});


//mais moderno - forEach com arrow fuction

listNome.forEach(nome => {
    console.log(nome);
});

//nome e index com forEach
listNome.forEach((nome,indice) => {
    console.log(indice, nome);
});

//iterando sobre um array
const frutasF = ["Morango", "Abacate", "Goiabas"];

for(const cadaFruta of frutasF){
    console.log(cadaFruta);
}

//literando sbre uma string
const texto = "Olá mundo!"

for(const letra of texto){
    console.log(letra);
}
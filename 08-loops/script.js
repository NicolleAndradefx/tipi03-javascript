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
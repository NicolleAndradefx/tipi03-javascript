function calcular(){
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";
    
    //validação
    if(numero === ""){
        resultado.innerHTML = "Digite um número!";
        return;
    }

    for(let i = 1; i <= 10; i++){
        resultado.innerHTML += numero + " x " + i + " = " + (numero * i) + "<br>";
    }
}
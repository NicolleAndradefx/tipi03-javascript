// Objeto JavaScript
const pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "Desenvolvedora"
};
 
// Transformando em JSON
const stringJSON = JSON.stringify(pessoa);
console.log(stringJSON);
 
// Convertendo de volta para objeto
const pessoa2 = JSON.parse(stringJSON);
console.log(pessoa2);
 
 //JSON
const meuJson = `{
"nome": "Junior",
"idade": 21,
"skills":["HTML", "CSS", "Javascript"]
}`;
 
console.log(meuJson);
console.log (typeof meuJson);
 
 
//String JSON para Objeto
const meuObjeto = JSON.parse(meuJson);
console.log(meuObjeto);
console.log(meuObjeto.nome);
console.log(typeof meuObjeto);
 
//Objeto para String JSON
const jsonString = JSON.stringify(meuJson);
console.log(jsonString);
console.log(typeof jsonString);
 
//Erro de Sintaxe - JSON Inválido
const invalidoJSON = `{
"nome": Junior,
"idade": 21
}`;
 
const meuObjetoInvalido = JSON.parse(invalidoJSON);
 
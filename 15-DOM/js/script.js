//DOM movimentando-se nele
console.log(document.body);

//Nodelist - acessar a lista de nós filhos
console.log(document.body.childNodes);

//Acessando um elemento na posição da Nodelist
console.log(document.body.childNodes[1].childNodes);

//propriedade para acessar o elemento do título
console.log(document.body.childNodes[1].childNodes[1].textContent);

//selecinando por tags
const listadeItens = document.getElementsByTagName("li");
console.log(listadeItens);

//selecionando elemento por id
const titulo = document.getElementById("titulo");
console.log(titulo);

//selecionando elemento por classe
const produtos = document.getElementsByClassName("produtos");
console.log(produtos);

//insertbefore - inserir antes
const paragrafo = document.createElement("p");
const header = titulo.parentElement;
header.insertBefore(paragrafo, titulo);
const pagarParagrafo = document.getElementsByTagName("p")
console.log(pagarParagrafo);

//appendChild - adicina um novo filho no final
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

//replaceChild - substitui um filho existente por um novo filho
const h2 = document.createElement("h2");
h2.textContent = "Novo Título";
header.replaceChild(h2, titulo);

//criando nó de texto
const meuTexto = document.createTextNode("Inserindo outro título");
console.log(meuTexto);
const h3 = document.createElement("h3");
h3.appendChild(meuTexto);
console.log(h3);

//substituindo
header.replaceChild(h3, h2);

//setAttribute e getAttribute
const primeiroLink = navLinks.querySelector("a");
console.log(primeiroLink);
primeiroLink.setAttribute("href", "https://www.uol.com.br/");

//pegando o link alterado
console.log(primeiroLink.getAttribute("href"));

//abrir em uma nova aba
primeiroLink.setAttribute("target", "_blank");

//altura e largura
const footer = document.querySelector("footer");
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
console.log(footer.clientWidth);
console.log(footer.clientHeight);

//getClientBoundiRect - retângulo delimitador do conteúdo visível
const produto1 = produtos[0];
console.log(produto1.getBoundingClientRect());

//css com js
const mainContainer = document.getElementById("main-container");

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#234";
mainContainer.style.paddingBottom = "100px;"

//HTML Collection - fazendo um loop no li e alternando a cor de fundo
for(const li of listadeItens){
    li.style.backgroundColor = "yellow";
}
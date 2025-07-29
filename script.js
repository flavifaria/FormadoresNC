// Manipulação de variáveis
// Variáveis são usadas para armazenar dados que podem ser alterados durante a execução do programa
function inserirNome(){
    let nome = prompt("Digite seu nome:");
    let elemento = document.querySelector("#nome");
    elemento.innerHTML = nome;
}

// Manipulação de DOM
// O DOM (Document Object Model) é uma interface de programação para documentos HTML e XML.
inserirNome();
let linguagens = ["Javascript", "Python", "C"];
const item = document.querySelector(".lista");
item.textContent = linguagens[0];


// Objetos em JavaScript
// Objetos são estruturas que permitem agrupar dados e funcionalidades relacionadas.
let aluno1 = {
  nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ºsérie",
  materiasFavoritas: ["Geografia","Programação","Arte"]
}

// Acessando propriedades do objeto
console.log(aluno1.nome); // “Gabriel”
console.log(aluno1.idade); // 13
console.log(aluno1.materiasFavoritas);// ["Geografia","Programação","Arte"]
console.log(aluno1.materiasFavoritas[1]); // "Programação"

const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;


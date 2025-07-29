// Manipulação de variáveis
function inserirNome() {
  let nome = prompt("Digite seu nome:");
  let elemento = document.querySelector("#nome");
  elemento.innerHTML = nome;
}

// Manipulação de DOM
inserirNome();
let linguagens = ["Javascript", "Python", "C"];
const item = document.querySelector(".lista");
item.innerHTML = ""; // Limpa antes de adicionar
linguagens.forEach(lang => {
  item.innerHTML += `<li>${lang}</li>`;
});

// Objetos em JavaScript
let aluno1 = {
  nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ºsérie",
  materiasFavoritas: ["Geografia", "Programação", "Arte"]
}

// Acessando propriedades do objeto
console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.materiasFavoritas);
console.log(aluno1.materiasFavoritas[1]);

const objeto = document.querySelector("#aluno");
objeto.innerHTML = `
  Nome: ${aluno1.nome}<br>
  Idade: ${aluno1.idade}<br>
  Matérias Favoritas:
  <ul>
    ${aluno1.materiasFavoritas.map(m => `<li>${m}</li>`).join("")}
  </ul>
`;

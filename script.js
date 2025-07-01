function inserirNome(){
    let nome = prompt("Digite seu nome:");
    let elemento = document.querySelector("#nome");
    elemento.innerHTML = nome;
}

inserirNome();
let linguagens = ["Javascript", "Python", "C"];
const item = document.querySelector("#lista");
item.innerHTML = linguagens[0] + ", " + linguagens[1] + ", " + linguagens[2];
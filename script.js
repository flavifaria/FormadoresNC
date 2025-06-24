function inserirNome(){
    let nome = prompt("Digite seu nome:");
    let elemento = document.querySelector("#nome");
    elemento.innerHTML = nome;
}

inserirNome();
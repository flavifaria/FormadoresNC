function inserirNome(){
    let nomeUsuario = prompt("Digite seu nome:");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome();
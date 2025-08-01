const nome = document.querySelector("#nome");
const senha = document.querySelector("#senha");
const modalNome = document.querySelector("#modal-nome");
const input = document.querySelector(".formulario"); 
const ModalSenha = document.querySelector("#modal-senha");

input.addEventListener("submit", qtdletras);

function qtdletras(event){
    if (nome.value.length <= 8) {
        modalNome.innerHTML = "Sou fracassado"
    }
}

function qtdletras(event){
    if (senha.value.length <= 8){
        ModalSenha.innerHTML = "Senha muito pequena";
        senha.style.borderBottom = "2px solid red";
    }
}
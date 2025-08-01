const nome = document.querySelector("#nome");
const modalNome = document.querySelector("#modal-nome");
const input = document.querySelector(".formulario"); 
const modalSenha = document.querySelector("#modal-senhs");

input.addEventListener("submit", qtdletras);

function qtdletras(event){
    if (nome.value.length <= 8) {
        modalNome.innerHTML = "Sou fracassado"
    }
}

function qtdletras(event){
    if (nome.value.length <= 8){
        ModalSenha.innerHTML = "Senha muito pequena"
    }
}
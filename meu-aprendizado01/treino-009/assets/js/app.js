const nome = document.querySelector("#nome");
const modalNome = document.querySelector("#modal-nome");
const input = document.querySelector(".formulario"); 

input.addEventListener("submit", qtdletras);

function qtdletras(event){
    if (nome.value.length <= 8) {
        modalNome.innerHTML = "Sou fracassado"
    }
}
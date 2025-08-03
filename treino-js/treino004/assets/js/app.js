const form = document.querySelector("#confirm");
const inputNome = document.querySelector("#nome");
const inputSenha = document.querySelector("#senha");
const aviso1 = document.querySelector("#boxAviso1");
const aviso2 = document.querySelector("#boxAviso2");


//Criando o evento
form.addEventListener("submit", function(event){
    event.preventDefault();
    if (inputNome.value.length <= 8) {
        aviso1.innerHTML = "Nome muito curto";
    }
});
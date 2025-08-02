const form = document.querySelector("#submit");
const formNome = document.querySelector("#nome");
const formSenha = document.querySelector("#senha");
const resultadoNome = document.querySelector("#boxAviso1");
const resultadoSenha = document.querySelector("#boxAviso2");

//Criando o Evento
form.addEventListener("submit", clique);

//Criando a função submit
function clique(){
    if (formNome.value.length < 8) {
        resultadoNome.innerHTML = "Nome muito pequeno! melhore.";
        formNome.style.borderBottom = "2px solid red";
    }else if (formNome.value.length > 8 && formNome.value.length <= 16) {
        resultadoSenha.innerHTML = "Quantidade de letras aceitas";
        formNome.style.borderBottom = "2px solid orange";
    }else{
        
    }
}

function clique(){
    if (formSenha.value.length < 8) {
        resultadoSenha.innerHTML = "Senha muito fraca, melhore!";
        formSenha.style.borderBottom = "2px solid red";
    }else if (formSenha.value.length > 8 && formSenha.value.length <= 16) {
        resultadoSenha.innerHTML = "Senha de tamanho rasoavel";
        formSenha.style.borderBottom = "2px solid orange"
    }
}
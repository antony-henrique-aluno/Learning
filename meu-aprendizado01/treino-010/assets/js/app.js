const form = document.querySelector("#submit");
const formNome = document.querySelector("#nome");
const formSenha = document.querySelector("#senha");
const resultadoNome = document.querySelector("#boxAviso1");
const resultadoSenha = document.querySelector("#boxAviso2");

//Criando o Evento
form.addEventListener("submit", function(event){
    event.preventDefault()//Parametro que impede o recarregamento da pagina
    //Logica da validação do nome
    if (formNome.value.length < 8) {
        resultadoNome.innerHTML = "Seu nome tem poucas letras";
        formNome.style.borderBottom = "2px solid rgb(255,14,14)";
        setTimeout(function(){
            resultadoNome.innerHTML = "";
            formNome.style.borderBottom = "";
        }, 5000)
    }else if (formNome.value.length > 8 && formNome.value.length <= 16) {
        resultadoNome.innerHTML = "Seu nome tem uma Quantidade de letras rasoaveis";
        formNome.style.borderBottom = "2px solid rgb(255,160,14)";
        setTimeout(function(){
            resultadoNome.innerHTML = "";
            formNome.style.borderBottom = "";
        }, 5000)
    }else{
        resultadoNome.innerHTML = "Otimo nome!";
        formNome.style.borderBottom = "2px solid rgb(23,255,14)";
        setTimeout(function(){
            resultadoNome.innerHTML = "";
            formNome.style.borderBottom = "";
        })
    }
    //Logica da validação da senha 
    if (formSenha.value.length < 8) {
        resultadoSenha.innerHTML = "Sua senha é muito curta";
        formSenha.style.borderBottom = "2px solid rgb(255,14,14)";
    }else if (formSenha.value.length > 8 && formSenha.value.length <=16) {
        resultadoSenha.innerHTML = "Sua senha está do tamanho rasoavel";
        formSenha.style.borderBottom = "2px solid rgb(255,160,14)";
    }else{
        resultadoSenha.innerHTML = "Sua senha é forte!";
        formSenha.style.borderBottom = "2px solid rgb(23,255,14)";
    }
});















// function clique(){
//     if (formNome.value.length < 8) {
//         resultadoNome.innerHTML = "Nome muito pequeno! melhore.";
//         formNome.style.borderBottom = "2px solid red";
//     }else if (formNome.value.length > 8 && formNome.value.length <= 16) {
//         resultadoNome.innerHTML = "Quantidade de letras aceitas";
//         formNome.style.borderBottom = "2px solid orange";
//     }else{
//         resultadoNome.innerHTML = "O nome está forte!";
//         formNome.style.borderBottom = "2px solid rgb(14,255,19)";
//     }
// }
// 
// function clique(){
//     if (formSenha.value.length < 8) {
//         resultadoSenha.innerHTML = "Senha muito fraca, melhore!";
//         formSenha.style.borderBottom = "2px solid red";
//     }else if (formSenha.value.length > 8 && formSenha.value.length <= 16) {
//         resultadoSenha.innerHTML = "Senha de tamanho rasoavel";
//         formSenha.style.borderBottom = "2px solid orange";
//     }else{
//         resultadoSenha.innerHTML = "A senha está forte!";
//         formSenha.style.borderBottom = "2px solid rgb(14,255,19)";
//     }
// }
const form = document.querySelector("#confirm");
const inputNome = document.querySelector("#nome");
const inputSenha = document.querySelector("#senha");
const aviso1 = document.querySelector("#BoxAviso1");
const aviso2 = document.querySelector("#BoxAviso2");


const aviso3 = document.querySelector("#BoxAviso3");
const icons = document.getElementsByTagName("li");


//Criando o evento
form.addEventListener("submit", function(event){
    event.preventDefault();
    
    //Aviso do nome
    if (inputNome.value.length <= 8) {
        aviso1.innerHTML = "Nome muito curto";
        setTimeout(function(){
            aviso1.innerHTML = ""; //Faz o valor voltar ao vazio
        }, 5000);
    }else if (inputNome.value.length > 8 && inputNome.value.length <= 16) {
        aviso1.innerHTML = "Nome quase perfeito";
        setTimeout(function(){ //Função anonima
            aviso1.innerHTML = "";
        }, 5000);
    }else{ 
        aviso1.innerHTML = "Nome forte e exelente";
        setTimeout(function(){
            
        }, 5000);
    }
    
    //Aviso de senha
    if (inputSenha.value.length <= 8) {
        aviso2.innerHTML = "Senha muito curta";
        setTimeout(function(){
            aviso2.innerHTML = "";
        }, 5000);
    }else if (inputSenha.value.length > 8 && inputSenha.value.length <= 16) {
        aviso2.innerHTML = "Senha quase perfeita";
        setTimeout(function(){
            aviso2.innerHTML = "";
        }, 5000);
    }else{
        aviso2.innerHTML = "Senha exelente e forte";
        setTimeout(function(){
            aviso2.innerHTML = "";
        }, 5000);
    }
});

icons.addEventListener("click", clicado);

function clicado(){
    aviso3.innerHTML = "Avisado"
}
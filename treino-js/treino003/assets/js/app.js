const caixaPergunta = document.querySelector("#pergunta");
const btnConfirme = document.querySelector("#btn");
const boxResult = document.querySelector(".resultado");

btnConfirme.addEventListener("click", clique);

function clique(){
    if (caixaPergunta == "brasil") {
        boxResult.innerHTML = "Deu certo?"
    }else 
        boxResult.innerHTML = "Foda"
}
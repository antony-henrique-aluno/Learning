const caixaPergunta = document.querySelector("#pergunta");
const btnConfirme = document.querySelector("#btn");
const boxResult = document.querySelector(".resultado");
const fundo = document.querySelector("#background");
const img = document.querySelector("#imgMiniatura");


btnConfirme.addEventListener("click", clique);
function clique(){
    const valorDigitado = caixaPergunta.value.toLowerCase().trim();
    if (valorDigitado == "brasil") {
        boxResult.innerHTML = "Deu certo?"
    }else 
        boxResult.innerHTML = "Deu errado?"
        caixaPergunta.style.borderBottom = "2px solid red"
}

img.addEventListener("click", toquei);
function toquei(){
    fundo.style.background = "green"
}
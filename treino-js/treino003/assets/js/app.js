const caixaPergunta = document.querySelector("#pergunta");
const btnConfirme = document.querySelector("#btn");
const boxResult = document.querySelector(".resultado");

btnConfirme.addEventListener("click", clique);

function clique(){
    const valorDigitado = caixaPergunta.value.toLowerCase();
    if (valorDigitado == "brasil") {
        boxResult.innerHTML = "Deu certo?"
    }else 
        boxResult.innerHTML = "Foda"
        caixaPergunta.style.borderBottom = "2px solid red"
}
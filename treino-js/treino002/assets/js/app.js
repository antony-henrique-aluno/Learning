const miniatura = document.querySelector("#ftMiniatura");
const modal = document.querySelector("#modal");
const zoomImg = document.querySelector("#zoomImg");
const fechar = document.querySelector("#fechar");

//Criando a função para dar o zoom na imagem 
miniatura.addEventListener("click", abrirImg) //A variavel miniatura recebe o evento click 
fechar.addEventListener("click", fechandoImg);
function abrirImg(){
    modal.style.display = "block" 
    modal.style.background = "rgba(0, 0, 0, 0.5)"
    zoomImg.src = miniatura.src
}

function fechandoImg(){
    modal.style.display = "none"
}
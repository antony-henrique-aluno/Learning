const miniatura = document.querySelector("#ftMiniatura");
const modal = document.querySelector("#modal");
const zoomImg = document.querySelector("#zoomImg");


//Criando a função para dar o zoom na imagem 
miniatura.addEventListener("click", abrirImg) //A variavel miniatura recebe o evento click 
function abrirImg(){
    modal.style.display = "block" 
    zoomImg.src = miniatura.src
}
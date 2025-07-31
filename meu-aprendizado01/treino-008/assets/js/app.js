const miniatura = document.querySelector("#miniatura");
const modal = document.querySelector("#modal");
const zoomImg = document.querySelector("#zoom-img");

//Criando o evento de clique
miniatura.addEventListener("click", zoom);
miniatura.addEventListener("touchstart", zoom);
function zoom(){
    modal.style.display = "block";
    zoomImg.src = miniatura.src;
} 
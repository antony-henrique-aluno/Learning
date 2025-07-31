const miniaturaImg = document.querySelector("#miniatura"); 
const modalImg = document.querySelector("#modal");
const zoomImg = document.querySelector("#zoom-img");

//Criando o evento de clique para o zoom na imagem 
miniaturaImg.addEventListener("click", zoom);
miniaturaImg.addEventListener("touchstart", zoom);
function zoom(){
    zoomImg.src = miniaturaImg.src;
    modalImg.style.display = "block";
}
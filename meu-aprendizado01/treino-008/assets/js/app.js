const MiniaturaImg = document.querySelector("#miniatura"); 
const ModalImg = document.querySelector("#modal");
const ZoomImg = document.querySelector("#zoom-img");

//Criando o evento de clique para o zoom na imagem 
MiniaturaImg.addEventListener("click", zoom);
MiniaturaImg.addEventListener("touchstart", zoom);
function zoom(){
    ZoomImg.src = MiniaturaImg.src;
    ModalImg.style.display = "block";
}
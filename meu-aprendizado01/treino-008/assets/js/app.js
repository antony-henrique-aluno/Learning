const MiniaturaImg = document.querySelector("#miniatura"); 
const ModalImg = document.querySelector("#modal");
const ZoomImg = document.querySelector("#zoom-img");
const Close = document.querySelector("#fechar")

//Criando o evento de clique para o zoom na imagem 
MiniaturaImg.addEventListener("click", zoom);
MiniaturaImg.addEventListener("touchstart", zoom);
Close.addEventListener("click", closeimg);
Close.addEventListener("touchstart", closeimg);
function zoom(){
    ZoomImg.src = MiniaturaImg.src;
    ModalImg.style.display = "block";
    ModalImg.style.background = "rgba(0, 0, 0, 0.7)"
}
 
function closeimg(){
    ModalImg.style.display = "none";
}
const MiniaturaImg = document.querySelector("#miniatura"); 
const ModalImg = document.querySelector("#modal");
const ZoomImg = document.querySelector("#zoom-img");
const Close = document.querySelector("#fechar")

//Criando o evento de clique para o zoom na imagem 
MiniaturaImg.addEventListener("click", zoom);
MiniaturaImg.addEventListener("touchstart", zoom);
Close.addEventListener("click", closeimg);
function zoom(){
    ZoomImg.src = MiniaturaImg.src;
    ModalImg.style.display = "block";
}

function closeimg(){
    ModalImg.style.display = "none";
}
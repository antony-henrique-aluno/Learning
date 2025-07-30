const img = document.querySelectorAll(".zoom-img");
const modal = document.querySelector("#zoom-modal");
const zoomedImg = document.querySelector("#zoomed-img");
const fechado = document.querySelector("#fechar");

img.forEach(function(imagens){ //Preciso estudar sobre forEach
    imagens.addEventListener("click", function(){
        zoomedImg.src = imagens.src;
        modal.style.display = "block";
    });
});

//Botão de fechar
fechado.addEventListener("click", close);
function close(){
    modal.style.display = "none";
}
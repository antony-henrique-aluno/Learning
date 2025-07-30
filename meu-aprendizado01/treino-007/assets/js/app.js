const img = document.querySelectorAll(".zoom-img");
const modal = document.querySelector("#zoom-modal");
const zoomedImg = document.querySelector("#zoomed-img");

img.forEach(function(imagens){ //Preciso estudar sobre forEach
    imagens.addEventListener("click", function(){
        zoomedImg.src = imagens.src;
        modal.style.display = "block";
    });
});
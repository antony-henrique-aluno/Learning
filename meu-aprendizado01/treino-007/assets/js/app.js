const img = document.querySelectorAll(".zoom-img");
const modal = document.querySelector("#zoom-modal");
const zoomedImg = document.querySelector("#zoomed-img");

img.forEach(function(imagens){
    imagens.addEventListener("click", function(){
        zoomedImg.src = img.src;
        modal.style.display ="block";
    })
})
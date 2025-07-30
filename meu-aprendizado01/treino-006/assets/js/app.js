//Pegando e criandos a variaveis dos elementos
const miniatura = document.querySelector(".miniatura");
const modal = document.querySelector("#modal");
const imagemAmpliada = document.querySelector("#imagem-ampliada");
const fechar = document.querySelector("#fechar");

//Criando o evento de clique e touch
miniatura.addEventListener("click", clique);
miniatura.addEventListener("touchstart", clique);

function clique(){
    modal.style.display = "block";
    imagemAmpliada.src = miniatura.src;
}

//Criando o evento de fechar
fechar.addEventListener("click", fechado);
fechar.addEventListener("touchstart", fechado);

function fechado(){
    modal.style.display = "none"; //Fecha a modal
}


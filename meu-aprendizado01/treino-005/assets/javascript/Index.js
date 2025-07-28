var botão1 = window.document.getElementById("btn1");
var botão2 = window.document.getElementById("btn2");

// eventos listeners
botão1.addEventListener("touchstart", finalizado);
function finalizado(){
    botão1.value = "Finalizado"
    botão1.style.transition = "500ms"
    setTimeout(concluir, 500);
    function concluir(){
        botão1.value = "Concluir"
    }
}


botão2.addEventListener("touchstart", deletado);
function deletado(){
    botão2.value = "Deletado"
    botão2.style.transition = "500ms"
    setTimeout(deletar, 500);
    function deletar(){
        botão2.value = "Deletar"
    }
}    
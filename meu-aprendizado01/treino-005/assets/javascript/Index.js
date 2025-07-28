var botão1 = window.document.getElementById("btn1");
var botão2 = window.document.getElementById("btn2");

// eventos listeners
botão1.addEventListener("touchstart", finalizado);
function finalizado(){
    botão1.value = "Finalizado"
    setTimeout(concluir, 2000);
}

function concluir(){
    botão1.value = "concluir"
}

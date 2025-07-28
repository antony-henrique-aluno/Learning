



//var global
var btn1 = window.document.getElementById("button1");
var btn2 = window.document.getElementById("button2");
//Events listeners
btn1.addEventListener("click", concluido);
btn2.addEventListener("click", deletado);
function concluido(){
    btn1.innerText = "Concluido"
}

function deletado(){
    btn2.innerText = "Deletado"
}
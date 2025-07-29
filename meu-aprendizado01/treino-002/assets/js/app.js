//Primeiro crie a variavel que vai reber o id do elemento 
const btn = document.querySelector("#btn1");

//Segundo adicione os events listeners na variavel que recebeu o id do elemento 
btn.addEventListener("touchstart", toque);

//Terceiro crie a função que vai disparar o evento
function toque(){
    btn.innerText = "Finalizado"
    setTimeout(finalizar, 1000);
    function finalizar(){
        btn.innerText = "Finalizar"
    }
}

function qtdNome(){
    const nome = document.querySelector("#nome")
    const modalNome = document.querySelector("#nome-modal") 
    if (nome.value.length <= 8) {
        modalNome.innerHTML = "Nome muito pequeno";
    }
}

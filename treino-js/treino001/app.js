//Classificando temperatura

const temperatura = 36
if (temperatura < 0) {
    console.log("Está congelando aqui!")
}else if (temperatura >= 0 && temperatura <= 25) {
    console.log("O clima está agradavel") //Mostra na tela oq foi digitado
}else if (temperatura > 25 && temperatura <= 35) {
    console.log("O clima está ficando quente")
}else 
    console.log("Está pegando fogo, bixo!")
//Classificando temperatura do menor valor até o maior

const temperatura = 36
if (temperatura < 0) {
     console.log("Está congelando aqui!")
}else if (temperatura >= 0 && temperatura <= 25) {
     console.log("O clima está agradavel") //Mostra na tela oq foi digitado
}else if (temperatura > 25 && temperatura <= 35) {
     console.log("O clima está ficando quente")
}else 
     console.log("Está pegando fogo, bixo!")
    
    
//Classificando temperatura do maior valor, até o menor

const temp = -5
if (temp > 35) {
    console.log("Está pegando fogo! bixo")
}else if (temp >= 25) {
    console.log("O clima está agradavel")
}else if (temp >= 0){
    console.log("Que clima agradavel")
}else
    console.log("Esta tudo congelando")
    

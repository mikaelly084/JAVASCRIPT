let time = 2000. //tempo de rotaçao
let currentImageIndex = 0 //a 1 imagem e 0
let images = document.getElementById("#slider img")
let max = images.length //tamanho das imagens

function nextImage(){ //vai puxare as proximas imag
    images[currentImageIndex].classList.remove("selected")
    //remover a classer do elemento atual para outras imagem irem adicionando
    currentImageIndex++//incrementar as img
    if(currentImageIndex >= max){
        currentImageIndex = 0
        images[currentImageIndex].classList.add("selected")

    }
}
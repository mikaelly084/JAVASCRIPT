let time = 2000 // tempo de rotação
let currentImageIndex = 0 // a primeira imagem é zero
let images = document.querySelectorAll("#slider img") //pegar imagem
let max = images.length //tamanho da imagem
 
function nextImage(){ //vai puxar a proxima imagem
    images[currentImageIndex].classList.remove("selected")
    //remover a classe do elemento atual, para as outras
    //imagens irem adicionada
    currentImageIndex++ //incrementar as imagens
    if(currentImageIndex >= max){
        //se o meu currentImageIndex for maior ou igual ao máximo que tenho
        // de imagens que eu tenho, ele será resetado para a posiçao
        //então o nosso banner fica rotativo
        currentImageIndex = 0
       
    }
    images[currentImageIndex].classList.add("selected")
}
   
    function start(){
        setInterval(nextImage,time)
       
    }
    document.addEventListener("DOMContentLoaded",start)
 

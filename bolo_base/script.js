/*Criar uma função em que eu mando elemento el e basicamente ele faz o comando querySelector pra mim */
const c = (el) => document.querySelector(el)
 
cakeJson.map((item,index) =>{
    /*aqui vamos dar um clone node no cake item que está dentro do HTML e para eu clonar o cakeitem eu vou usar o clonenode*/
    let cakeItem = document.querySelector('.models .cake-item').cloneNode(true)

    //adicionando o nome dos bolo
    cakeItem.querySelector('.cake-item--name').innerHTML = item.name
    //descriçao
    cakeItem.querySelector('.cake-item--desc').innerHTML = item.description
    //preço
    cakeItem.querySelector('.cake-item--price').innerHTML = `R$ ${(item.price.toFixed(2))}`
    //images
    cakeItem.querySelector('.cake-item--img img').src = item.img
 
    /*preencher as informações em cake item e adicionar na tela (a listagem de bolos) está em class="cakearea"*/
    document.querySelector('.cake-area').append(cakeItem)
})
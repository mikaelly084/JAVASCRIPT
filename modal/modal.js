const btnAbrir = document.querySelector('.modalBtn')
btnAbrir.addEventListener('click',fecharModal)

const btnFechar = document.querySelector('.btnFechar')
btnFechar.addEventListener('click',fecharModal)

function fecharModal(){
    const modal = document.querySelector('.modal')
    const estiloModal = modal.style.display
    if(estiloModal == 'block'){
        modal.style.display = 'none'
    }else{
        modal.style.display = 'block'
    }
}
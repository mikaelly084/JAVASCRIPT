function verificar(){
    let valorselect = document.querySelector("select").value
 
    if(valorselect == 'desabilitado'){
        /* desabilitando o input */
        document.querySelector("input").disabled = true
        let pElemento = document.getElementById("mensagem")
        /* colocando no p*/
        pElemento.innerHTML = "DESABILITADO"
        /* colocando estilos*/
        pElemento.style.color = "white"
        pElemento.style.backgroundColor = "red"
    } else {
        document.querySelector("input").disabled = false
        let pElemento = document.getElementById("mensagem")
        pElemento.innerHTML = ""
        pElemento.style.color = "black"
        pElemento.style.backgroundColor = "transparent"
    }
}
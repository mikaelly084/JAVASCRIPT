//let nome = "Ciclano"

//alert("oi"+nome)

//let nome = prompt("digite o seu nome")
//alert("ola"+nome+"tudo bem?")

let nota1 = Number(prompt("nota 1"))
let nota2 = Number(prompt("nota 2"))
let nota3 = Number(prompt("nota 3"))

let media = (nota1+nota2+nota3)/3
let mediaCorreta = media.toFixed(2)

if(media >= 6){
    alert("sua nota foi"+mediaCorreta+"aprovado")
}else{
    alert("sua notafoi"+mediaCorreta+"reprovado")
}
// arrays em js
let names = ["fulano","mario","ciclano"]
//console.log(names)
 
// tamanho do arrays
console.log(`tamanho do array: ${names.length}`)
console.log(names[1])
 
//exibindo todos os elemntos do array
for (let i = 0; i< names.length; i++){
    console.log(names[i])
}

let listanomes = ['guilherme', 'bruno', 'richarlison']
for(let contador = 0; contador < listanomes.length; contador++){
    let mensagem = `boas vindas ${listanomes[contador]}`
    console.log(mensagem)
}

//forEach
listanomes.forEach((listanomes) => {
    console.log(listanomes)
})
 
// listanomes.push('rodolfo')
// console.log(listanomes)
// listanomes.pop()
// console.log(listanomes)

listanomes.shift()
console.log(listanomes)

let posicao = 2
let novonome = 'Lucas'
listanomes.splice(posicao, 0, novonome)
console.log(listanomes)
// function mostrarRes() {
//     let nome = document.querySelector('#c1').value;
 
//     if (nome.trim() !== '') {
//         let resultadoDiv = document.querySelector('#resultado');
//         let novoParagrafo = document.createElement('p');
//         novoParagrafo.textContent = nome;
 
//         // Coloca o novo nome no topo
//         resultadoDiv.prepend(novoParagrafo);
 
//         // Limpa o input
//         document.querySelector('#p1').value = '';
//     }
// }

//segunda forma de fazer
const enviarNome = document.querySelector('button')
enviarNome.addEventListener('click',()=>{
 
    //manipulando o input
    const input = document.querySelector('input')
    //pegando o valor do input
    const nome = input.value
    //limpando o campo
    input.value=""
    //criando um paragrafo
    const nomeUsuario = document.createElement('p')
    //colocando um texto no paragrafo
    nomeUsuario.innerHTML = nome
    document.body.appendChild(nomeUsuario)
 
} )
//criar um elemento
let p = document.createElement('p')
p.innerHTML = " Este paragrafo foi inserido na linha2"
//anexado na linha 2
//ele anexa o paragrafo como filho da linha2
linha2.prepend(p)
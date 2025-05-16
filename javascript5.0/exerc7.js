const btnAdicionar = document.querySelector('button.adicionar');
const btnRemover = document.querySelector('button.remover');
const box = document.querySelector('.box1');
 
btnAdicionar.addEventListener('click', (e) => {
    box.classList.add('estiloAtivo');
 
    // Remove a classe 'ativo' de todos os botões para só um ficar ativo
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('ativo'));
 
    // Adiciona 'ativo' só no botão clicado
    e.target.classList.add('ativo');
  });
 
  btnRemover.addEventListener('click', (e) => {
    box.classList.remove('estiloAtivo');
 
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('ativo'));
   
    e.target.classList.add('ativo');
  });


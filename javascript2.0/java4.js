function mostrarValores() {
    let t1 = document.querySelector('#t1').value;
    let t2 = document.querySelector('#t2').value;
    let t3 = document.querySelector('#t3').value;

    let resultado = `
      <strong>O seu filme favorito é: </strong> ${t1}
      <strong>Você ama ouvir: </strong> ${t2}
      <strong>Seu jogo favorito é: </strong> ${t3}
    `;
    document.querySelector('#resultado').innerHTML = resultado;

  }



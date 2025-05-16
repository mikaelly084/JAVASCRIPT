const paragrafo = document.getElementById('paragrafo');
const btnEsconder = document.getElementById('Esconder');
const btnMostrar = document.getElementById('Mostrar');

btnEsconder.addEventListener('click', () => {
    paragrafo.style.display = 'none';
});

btnMostrar.addEventListener('click', () => {
    paragrafo.style.display = 'block';
});
function converter() {
    let valorDolar = document.getElementById("valorDolar").value;
    let resultado = document.getElementById("resultado");
    const cotacao = 5.00; 

    if (isNaN(valorDolar) || valorDolar.trim() === "") {
        resultado.innerHTML = "Por favor, digite um valor numérico válido.";
        resultado.style.color = "red";
        return;
    }

    let valorReal = parseFloat(valorDolar) * cotacao;
    resultado.innerHTML = `R$ ${valorReal.toFixed(2)}`;
    resultado.style.color = "green";
}

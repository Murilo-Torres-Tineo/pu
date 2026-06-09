const botao = document.querySelector("#btnCalcular");
const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");

function somar() {
    const num1 = Number(numero1.value);
    const num2 = Number(numero2.value);

    const resCalc = num1 + num2;

    resultado.textContent = resCalc;

    console.log(isNaN(num1));
    console.log(isNaN(num1));
}

function validarEntradas() {
    if (isNaN(numero1.value) === "" || isNaN(numero2.value) === "") {
        return false
        // Não posso calcular
    } else {
        return true
        // Posso calcular
    }

}

function mostrarMensagemErro() {
    resultado.innerHTML = "Valores inválidos. Insira novos valores (números)"
}


if (validarEntradas() === true) {
    botao.addEventListener("click", somar);
}
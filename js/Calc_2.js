const botao = document.getElementById("btnSomar");
const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");
const botaoSubtracao = document.querySelector("#btnSubtrair");
const botaoLimpar = document.querySelector("#btnLimpar");
const caixaResultado = document.querySelector("#caixaResultado");
const botaoMultiplicar = document.querySelector("#btnMultiplicar");
const botaoDividir = document.querySelector("#btnDividir");

function somar() {
    let num1, num2, resCalculo;

    if (validarEntradas()) {
        num1 = Number(numero1.value);
        num2 = Number(numero2.value);
        resCalculo = num1 + num2;

        caixaResultado.classList.remove("invisible");
        exibirResultado(resCalculo);
        limparEntradas();
    } else {
        mostrarMensagemErro();
    }
}

function subtrair() {
    let num1, num2, resCalculo;

    if (validarEntradas()) {
        num1 = Number(numero1.value);
        num2 = Number(numero2.value);
        resCalculo = num1 - num2;

        caixaResultado.classList.remove("invisible");
        exibirResultado(resCalculo);
        limparEntradas();
    } else {
        mostrarMensagemErro();
    }
}

function multiplicar() {
    let num1, num2, resCalculo;

    if (validarEntradas()) {
        num1 = Number(numero1.value);
        num2 = Number(numero2.value);
        resCalculo = num1 * num2;

        caixaResultado.classList.remove("invisible");
        exibirResultado(resCalculo);
        limparEntradas();
    } else {
        mostrarMensagemErro();
    }
}

function dividir() {
    let num1, num2, resCalculo;

    if (validarEntradas()) {
        num1 = Number(numero1.value);
        num2 = Number(numero2.value);

        if (num2 === 0) {
            caixaResultado.classList.remove("invisible");
            resultado.innerHTML = "Valores inválidos - Divisão por zero";
            resultado.style.color = "red";
        } else {
            resCalculo = num1 / num2;

            caixaResultado.classList.remove("invisible");
            exibirResultado(resCalculo);
            limparEntradas();
        }
    } else {
        mostrarMensagemErro();
    }
}

function LimparCampos() {
    numero1.value = "";
    numero2.value = "";
    resultado.innerHTML = "";
    caixaResultado.classList.add("invisible");
}

function limparEntradas() {
    numero1.value = "";
    numero2.value = "";
}

function validarEntradas() {
    return (
        numero1.value.trim() !== "" &&
        numero2.value.trim() !== "" &&
        !isNaN(numero1.value) &&
        !isNaN(numero2.value)
    );
}

function mostrarMensagemErro() {
    caixaResultado.classList.remove("invisible");
    resultado.innerHTML = "Valores inválidos. Insira novos valores (números)";
    resultado.style.color = "red";
}

function exibirResultado(valor) {
    resultado.innerHTML = "Resultado: " + valor;

    if (valor > 0) {
        resultado.style.color = "lightgreen";
    } else if (valor < 0) {
        resultado.style.color = "red";
    } else {
        resultado.style.color = "white";
    }
}

// O programa começa aqui
botao.addEventListener("click", somar);
botaoSubtracao.addEventListener("click", subtrair);
botaoLimpar.addEventListener("click", LimparCampos);
botaoMultiplicar.addEventListener("click", multiplicar);
botaoDividir.addEventListener("click", dividir);
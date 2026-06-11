//declaração de variáveis e constantes (elementos html)
const botao = document.querySelector("#btnCalcular");
const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");

//área das funções
function somar() {
    let num1, num2, resCalculo;

    if (validarEntradas() === true) {
        num1 = Number(numero1.value);
        num2 = Number(numero2.value);
        resCalculo = num1 + num2;
        exibirResultado(resCalculo);
    } else {
        mostrarMensagemErro();
    }
}

function validarEntradas() {
    if (isNaN(numero1.value) || isNaN(numero2.value)) {
        return false;
    } else {
        return true;
    }
}

function mostrarMensagemErro() {
    resultado.innerHTML = "Valores inválidos. Insira novos valores (números)";
}

function exibirResultado(valor) {
    resultado.innerHTML = valor;
}

//O programa começa aqui
botao.addEventListener("click", somar); // Com parametro sem retorno
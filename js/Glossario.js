//Pegar elemento (TAG) pelo ID
document.getElementById('num1');

//Pegar elemento (valor) pelo ID e colocar numa variável
let numero = document.getElementById('num1').value;

//Atribuir outro valor ao elemento pelo id
document.getElementById('num1').value = 30;


//Pegar elemento pela tag
document.getElementsByTagName('p');

//Pegar um array de tags pelo nome da tag
document.getElementsByTagName('p'); //array

//Pegar um item do array de tags pelo nome da tag
document.getElementsByTagName('p')[0] //seleciono a tag

//Pegar o conteúdo de uma tag específica dentro do array
document.getElementsByTagName('p')[0].innerHTML; //seleciono o conteúdo

// Pego um unico elemento com class, tag ou id. OU. o primeiro que encontrar.
document.querySelector('p');
document.querySelector('.box');
document.querySelector('#num1');

// Pego um array de elementos com class, tag ou id.
document.querySelectorAll('p');
document.querySelectorAll('.box');
document.querySelectorAll('#num1');[1];
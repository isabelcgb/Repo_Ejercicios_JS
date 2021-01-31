'use strict';
//Número de enlaces de la página
const link = document.getElementsByTagName('a');
console.log ('Número de enlaces de páginas: ', link.length);

//Dirección a la que enlaza el penúltimo enlace.
const penUltimo = link[link.length - 1].href;
console.log ('Dirección a la que enlaza el penúltimo enlace: ', penUltimo)

//Número de enlaces del tercer párrafo
const parrafo = document.getElementsByTagName('p');
const parrafo3 = parrafo[parrafo.length - 3].getElementsByTagName('a');
console.log ('Número de enlaces del tercer párrafo: ', parrafo3.length)

//Número de enlaces del tercer párrafo (forma 2)
const parrafoID = document.getElementById('third-paragraph');
const link3p = parrafoID.getElementsByTagName('a').length;
console.log ('Número de enlaces del tercer párrafo ID: ', link3p)

//Mostrar Primer resultado
const Resultado1 = document.querySelector ('#number-link');
Resultado1.innerHTML = `En está página hay ${link.length} enlaces`;

//Mostrar Segundo Resultado
const Resultado2 = document.createElement('p');
const ContResultado2 = document.createTextNode(penUltimo);
Resultado2.appendChild(ContResultado2);

const ResultadoParrafo = document.querySelector ('.Results');
ResultadoParrafo.appendChild(Resultado2);

//Mostrar Tercer Resultado

const Resultado3 = document.querySelector('#numberLink3');
Resultado3.innerHTML = `En el tercer parrafo hay ${link3p} enlaces`;
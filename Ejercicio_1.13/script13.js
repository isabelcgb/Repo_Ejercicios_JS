'use strict';

//Variables
const meses = [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
console.log ('meses = ', meses);

//Meses > 7
const meses7 = meses.filter (mes => mes.length > 7);
console.log ('Meses con mas de 7 letras =', meses7);

//Mayusculas
const Mayuscula = meses7.map (mayus => mayus.toUpperCase());
console.log ('Meses en Mayusculas = ', Mayuscula);

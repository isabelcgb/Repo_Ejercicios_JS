'use strict';

// Utilizando un for
const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
console.log('Notas: ', notas);
let puntuacion = 0;
for (let i=0; i < notas.length; i++ ) {
    puntuacion += notas [i];
};
console.log ('la puntuacion es: ', + puntuacion)

//Utilizando un for... of
const notas2 = [6, 7, 2, 9, 3, 4, 5, 8, 2];
console.log('Notas2: ', notas2);
let puntuacion2 = 0
for (let notas3 of notas2) {
    puntuacion2 += notas3;
}
console.log('Con el bucle FOR OF la puntuación final es ', notas2);
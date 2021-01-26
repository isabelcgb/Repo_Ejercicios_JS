'use strict';

//Número de DNI
const numDNI = prompt("Por favor ingresa el numero de tu DNI", "1234567");
console.log('Número de DNI =', numDNI);

//letras del DNI
var letras = [ 'T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
//Comprobacion
if (numDNI < 0 || numDNI > 99999999) {
    alert("El número proporcionado no es válido.");
} else {
    const letraselec= letras[numDNI%23]
    alert ('Tu letra de DNI es: '+ letraselec)
}

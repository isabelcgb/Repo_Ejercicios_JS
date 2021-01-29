'use strict';

//variables
const words = [ "Environmental", "Systems", "Research", "Institute"];
console.log ('Variable words = ', words);

//Función
const Larga = words.reduce((acumulator, previousValue) => {
    if (acumulator.length > previousValue.length) {
        return acumulator;
    }
    else {
        return previousValue;
    }
});
console.log ('La palabra más larga es ', Larga);
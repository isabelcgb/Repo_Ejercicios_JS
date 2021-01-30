'use strict';
/* Utilizando las clases de JavaScript, crea una que calcule el 
perímetro y su área y pinte por consola el resultado. 
Tendremos que hacer tres instancias para: un cuadrado pequeño
de 2cm de lado, mediano (5cm) y grande (10cm).
Area = l * l
Perimeto = l * 4 */

class Operaciones {
    constructor(cal) {
        this.Perimetro = cal * 2;
        this.Area = cal * cal;

        console.log (`Este cuadrado tiene ${cal} cm de lado, con un área de ${this.Area} cm y un perímetro de ${this.Perimetro} cm3`);
    }
};

const CuadradoPeq = new Operaciones (2)
const CuadradoMed = new Operaciones (5);
const CuadradoGran = new Operaciones (10);

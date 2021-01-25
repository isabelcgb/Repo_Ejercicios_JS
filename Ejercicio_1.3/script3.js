const data= ["Hola", 2, 5, "Adios"];

//Determina cuál de los dos números que hay en el array es mayor.
console.log('---Determina el número mayor---');
var num1= [data[1]];
var num2= [data[2]];
console.log('numero 1= ', num1);
console.log('numero 2= ', num2);

console.log('Num 1 es Mayor que Num 2?');
comp= num1 > num2;
console.log('comp = ', comp);

console.log('Num 2 es Mayor que Num 1?');
comp= num2 > num1;
console.log('comp = ', comp);

//resultado de las cinco operaciones numéricas realizadas con los dos elementos numéricos.
console.log('---Operaciones---');

suma = num1 + num2;
console.log('Suma = ', suma);

resta = num1 - num2;
console.log('Resta = ', resta);

Multiplicacion = num1 * num2;
console.log('Multiplicación = ', Multiplicacion);

division = num1 / num2;
console.log('División = ', division);

resto = num1 % num2;
console.log('Resto = ', resto);

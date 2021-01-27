const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

//Numeros Par
const par = number.filter(num => num %2 === 0);
console.log(par);

//Numeros Impar
const impar = number.filter(num2 => num2 %2 !== 0);
console.log(impar);
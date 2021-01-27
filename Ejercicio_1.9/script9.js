
const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];

//Sin Resumir
const Mayusculas = topics.map(function(x1){
    return x1.toUpperCase()
});
console.log('Topics en Mayusculas', Mayusculas);

//Resumido
const Mayusculas2 = topics.map (x2 => x2.toUpperCase());
console.log('Topics en Mayusculas', Mayusculas2);

//Tema Inverso

const Reversa = Mayusculas2.reverse();
console.log('Topics en reversa', Reversa);
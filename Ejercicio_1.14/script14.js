'use strict';

//Variable Inicial
const user = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 30, premium: false},
    {username: 'sergio58', age: 30, premium: true},
]
console.log ('User = ', user)


//Frase
const Filtro = user.map (user1 => {
    if (user1.premium) {
        console.log (` "${user1.username}" es usuario Premium `)
    }
});

//Filtro de Usuarios
const Filtro1 = user.filter (usuario => !usuario.premium);
console.log ('Usuarios NO Premium = ', Filtro1 );

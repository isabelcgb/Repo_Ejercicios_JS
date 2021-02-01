'use strict';

//Cuando hagamos click sobre el botón de guardar aparecerá un alert.
document.getElementById("BotonGuardar").addEventListener("click", alerta)
function alerta () {
    document.getElementById("BotonGuardar").innerHTML = alert("Acabas de apretar el botón, Se han guardado los datos!")
}

//Cuando hagamos foco sobre el input del nombre el fondo será de un color y cuando se lo quitemos, de otro.
const element = document.querySelector('.nombre');

element.addEventListener('focus', cambioFoco);
function cambioFoco() {
    element.style.backgroundColor = '#04819E';
};

element.addEventListener('focusout', cambioNOFoco);
function cambioNOFoco() {
    element.style.backgroundColor = '#FFDE00';
};

//Dependiendo si escribimos una vocal o una consonante en el segundo input su contenido será de un color distinto.
const Letra = document.querySelector('.random');

Letra.addEventListener ('keypress', checkLetra)
function checkLetra(event){
    const tipoLetra = event.which;
    if (tipoLetra === 97 || tipoLetra === 101 || tipoLetra === 105 || tipoLetra === 111 || tipoLetra === 117) {
        Letra.style.color = '#1437AD';
    } else {
        Letra.style.color = '#FF7F00';
    }
};
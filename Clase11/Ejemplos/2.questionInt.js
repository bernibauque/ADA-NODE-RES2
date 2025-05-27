// importamos
const readLineSync = require('readline-sync')

// pido que el usuario me ingrese la edad pero que sea solo un 
// numero entero y ninguna otra cosa
const edad = readLineSync.questionInt('Ingrese su edad: ')

// verificamos que la edad ingresada por ejemplo cumple con ciertos requisitos
if (edad >= 18) {
    console.log('Podes entrar al boliche y tomar alcohol');
} else {
    console.log('Te quedas afuera, a la matine');
}


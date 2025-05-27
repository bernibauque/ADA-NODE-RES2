// Pasos para usar un modulo externo/biblioteca son:
//1. instalar: generalmente con npm + install + nombre del modulo/biblioteca
//2. Importar: hago una variable con un nombre similar o igual al del modulo y
// uso la palbra clave require (commonjs) y import (es6) y luego le coloco entre
// parentesis y string el nombre del modulo/biblioteca

//Importamos el modulo 
const rl = require('readline-sync')

// le pido al usuario ingrese su nombre 
const nombre = rl.question('Ingrese su nombre: ')

// le pido al usuario que ingrese su edad
const edad = rl.question('Ingrese su edad: ')

// imprimo los datos en consola
console.log(`Hola ${nombre}! Tienes ${edad} anios.`);




const path = require('path')

// Ruta absoluta:
const rutaAbsoluta = '///\\\\/home/user//.//docs///bin/file.js////'

// ejemplo de normalizacion de una ruta con barras de mas
const ejemplo1 = path.normalize(rutaAbsoluta)
console.log("Ejemplo 1: ", ejemplo1);


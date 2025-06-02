const path = require('path')

// Ruta absoluta:
const rutaAbsoluta = '/home/user/docs/bin/file.js'

// ejemplo 1: verificamos que la ruta sea absoluta
const ejemplo1 = path.isAbsolute(rutaAbsoluta)
console.log("Ejemplo 1: ", ejemplo1);

// Ruta Relativa:
const rutaRelativa = 'bin/file.js'

// ejemplo 2: verificamos que la ruta sea absoluta
const ejemplo2 = path.isAbsolute(rutaRelativa)
console.log("Ejemplo 2: ", ejemplo2);
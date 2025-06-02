const path = require('path')

// Ruta absoluta:
const rutaAbsoluta = '/home/user/docs/bin/file.js'

// ejemplo: obtener la extension del archivo de una ruta absoluta
const ejemplo1 = path.extname(rutaAbsoluta)
console.log('Ejemplo 1: ', ejemplo1);

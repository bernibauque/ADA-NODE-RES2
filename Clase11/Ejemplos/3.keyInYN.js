//importamos
const readlinesync = require('readline-sync')

// le diremos al usuario si quiere continuar o no
const deseaContinuar = readlinesync.keyInYN('Deseas continuar?: ')

// colocamos un condicional
if (deseaContinuar) {
    console.log('Continuando con la operacion');
} else {
    console.log('Cancelando la operacion...');
}
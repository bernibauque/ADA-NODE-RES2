//importamos
const read_line_sync = require('readline-sync')

// hacemos el array de productos
const productos = ['lapiz de labios', 'delineador', 'perfume', 'banio de crema']

// usamos el metodo
const productosSeleccionados = read_line_sync.keyInSelect(productos, 'Cual es el producto que seleccionaste?: ')

// condicional
if (productosSeleccionados === -1) {
    console.log('No seleccionaste ningun producto.');
} else {
    console.log(`Has seleccionado: ${productos[productosSeleccionados]}`);
}

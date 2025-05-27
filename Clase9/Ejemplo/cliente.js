// Paso 1: Importar el modulo
const net = require('net')

// Paso 2: Creamos la conexion TCP para que se conecte al servidor
const client = net.createConnection({ port: 5000 }, () => {
    console.log('Conectado al servidor');
    client.write('Hola servidor :) ya me conecte')
})

// Paso 3: Comienzo a definir los eventos
// 1. Evento data
client.on('data', (data) => {
    console.log('Mensaje recibido: ', data.toString());
})

// 2. Evento end
client.on('end', () => {
    console.log('El servidor se cerro');
})

// 3. Evento error
client.on('error', (err) => {
    console.log('Error: ', err.message);
})

// 4. Evento close
client.on('close', () => {
    console.log('se cerro la conexion');
})

// Paso 4: Jugamos con el tiempo
client.setTimeout(10000, () => {
    console.log('Tiempo de espera agotado');
    client.end()
});

setTimeout(() => {
    console.log('pausando la recepcion de datos...');
    client.pause()
}, 5000)

setTimeout(() => {
    console.log('reanudando la recepcion de datos...');
    client.resume()
}, 5000)

setTimeout(() => {
    console.log('Destruyendo la conexion...');
    client.destroy()
}, 3000)

setTimeout(() => {
    console.log('Eliminando la referencia del socket...');
    client.unref()
}, 2000)

setTimeout(() => {
    console.log('Manteniendo la conexion activa');
    client.ref()
}, 3000)

setTimeout(() => {
    console.log('Finalizando la conexion.');
    client.end()
}, 4000)


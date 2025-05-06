/**
¡Hola, chicas! 🎉 
Hoy vamos a crear juntas un servidor TCP básico. 
Este servidor estará listo para escuchar conexiones desde otros 
programas (los "clientes") y mostrar en pantalla cualquier dato que 
reciba. 
Aún no nos enfocaremos en los clientes, solo en construir el 
servidor.

Objetivo:
Configurar un servidor TCP que:
Escuche en el puerto 4000.
Detecte cuando alguien se conecta.
Muestre en la consola cualquier mensaje que reciba.

 */

// PASO 1: Importacion del modulo net (me permite trabajar con servidores TCP)
const net = require('net')

// PASO 2: Creamos el servidor
const server = net.createServer((socket) => {
    // mensaje que aparece cuando un cliente se conecta al servidor
    console.log('Un cliente se ha conectado');

    // PASO 3 (EVENTO DATA): escuchamos el evento data, que se activa cuando el cliente envia datos al servidor
    socket.on('data', (data) => {
        // mostramos en la consola el mensaje recibido del cliente
        console.log("Mensaje recibido:", data.toString());
    })

    // PASO 4 (EVENTO END): escuchamos el evento end que se activa cuando el cliente se desconecta del servidor
    socket.on('end', () => {
        // mostramos en la consola el mensaje de que el cliente se desconecto
        console.log("El cliente se ha desconectado.");
    })
})

// PASO 5: Definimos el puerto en el que el servidor estara escuchando conexiones
const PORT = 4000;

// PASO 6: Inicio el servidor y lo ponemos a escuchar en el puerto que le pasamos
server.listen(PORT, () => {
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
})
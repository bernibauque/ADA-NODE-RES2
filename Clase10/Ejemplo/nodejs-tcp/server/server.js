const net = require('net') // importo modulo net

const server = net.createServer() // creo el servidor

// Manejo de eventos
server.on('connection', (socket) => {
    // 1. evento data
    socket.on('data', (data) => {
        console.log('\nEl cliente ' + socket.remoteAddress + ":" + socket.remotePort + " dice: " + data);
        socket.write('Recibido!')
    })

    // 2. evento close 
    socket.on('close', () => {
        console.log('Comunicacion finalizada');
    })

    // 3. evento error
    socket.on('error', (err) => {
        console.log('Error: ', err.message);
    })
})

// iniciamos el servidor
server.listen(4000, () => {
    console.log('Servidor esta escuchando en el puerto ', server.address().port);
})
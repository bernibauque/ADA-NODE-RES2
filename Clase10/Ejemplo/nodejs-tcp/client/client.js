//importamos modulo net
const net = require('net')
const readline = require('readline-sync')

// definimos las opciones de conexion
const options = {
    port: 4000,
    host: '127.0.0.1'
}

// creo una conexion del cliente
const client = net.createConnection(options)

// manejo de eventos
// evento 1: conexion 
client.on('connect', () => {
    console.log('Conexion satisfactoria');
    sendLine() // funcion que armo yo, para que el usuario ingrese un mensaje
})

// evento 2: data
client.on('data', (data) => {
    console.log('El servidor dice: ', data.toString());
    sendLine()
})

// evento 3: error
client.on('error', (err) => {
    console.log('Error: ', err.message);
})

function sendLine() {
    let line = readline.question('\nEscriba alguna cosa\t')
    if (line == "0") { //verifica si el usuario ingreso 0
        client.end() // cierra la conexion
    } else { // sino 
        client.write(line) // envia el mensaje ingresado por el usuario
    }
}

const crypto = require('crypto')

const algoritmo = 'aes-256-cbc' // otro algoritmo
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

// creamos el objeto cipher
const cipher = crypto.createCipheriv(algoritmo, key, iv)

// datos a autenticar
const data = 'mensaje secreto'

// cifrar los datos
let encriptado = cipher.update(data, 'utf8', 'hex')
// procesa el texto lo cifra
encriptado += cipher.final('hex') // finaliza el cifrado

console.log('texto cifrado: ', encriptado);

// creamos objeto para decifrar
const decipher = crypto.createDecipheriv(algoritmo, key, iv)

// deciframos
let decifrado = decipher.update(encriptado, 'hex', 'utf8')
decifrado += decipher.final('utf-8')

console.log('Texto decifrado: ', decifrado);




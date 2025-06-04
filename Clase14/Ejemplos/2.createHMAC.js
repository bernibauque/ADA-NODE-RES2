const crypto = require('crypto')

// Datos que quiero autenticar
const data = 'Mensaje secreto'

// clave secreta para HMAC
const secretKey = 'mi_clave_secreta'

// Creamos un objeto HMAC usando algoritmo
const hmac = crypto.createHmac('sha256', secretKey)

// actualizamos el HMAC
hmac.update(data)

// transformo a formato hexadecimal
const hashOutput = hmac.digest('hex')

console.log('HMAC SHA-256: ', hashOutput);

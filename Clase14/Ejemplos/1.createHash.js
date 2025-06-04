const crypto = require('crypto')

// datos que queremos hashear
const data = 'Este es un mensaje secreto'

// creamos el hash
const hash = crypto.createHash('sha256')

// Actualizo el hash con los datos
hash.update(data)

// Lo obtengo con formato hexadecimal
const hashOutput = hash.digest('hex')

// Mostramos por consola
console.log('Hash SHA-256: ', hashOutput);

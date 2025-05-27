/**
¡Hola, chicas! 🎉 
Hoy vamos a crear juntas una “Aplicación básica para saludar al 
usuario y conocer su edad” 🖥️

Instrucciones
Crea un archivo llamado app.js en Visual Studio Code.
Escribe un programa que haga lo siguiente:
- Reciba el nombre del usuario desde la línea de comandos.
- Use una variable de entorno para personalizar el saludo 
predeterminado.
- Muestre información básica del entorno de ejecución:
El directorio actual desde donde se ejecuta el programa.
La plataforma del sistema operativo.
- Use el módulo readline para preguntarle al usuario su edad.
- Agradezca al usuario y termine de forma ordenada.
Crea un archivo .env para configurar un saludo personalizado.
 */

// Paso 1: Importacion 
const readline = require('readline')

// Paso 2: Carga de las variables de entorno desde el archivo .env
require('dotenv').config()

// Paso 3: Establecemos el saludo predeterminado usando una vde
const saludoPredeterminado = process.env.SALUDO || 'Hola'

// Paso 4: Procesamos los argumentos de la linea de comando 
// Capturamos el primer argumento despues del nombre del 
// archivo como el nombre del usuario. Si no proporciona un
// argumento usamos "invitado" como valor predeterminado
const args = process.argv.slice(2)
const userName = args[0] || 'Invitado'

// Paso 5: Mostramos el saludo personalizado y el nombre del usuario
console.log(`${saludoPredeterminado}, ${userName}`);

// Paso 6: Mostramos informacion sobre el entorno de ejecucion
console.log('Informacion sobre el entorno de ejecucion: ');

// Paso 7: Mostramos la direccion actual desde donde se ejecuta el programa
console.log(`Directorio actual: ${process.cwd()}`);

// Paso 8: Mostramos la plataforma donde se ejecuta
console.log(`Plataforma : ${process.platform}`);

// Paso 9: creacion de la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Paso 10: Usamos el metodo question de rl
rl.question('Cuantos anios tienes?', (edad) => {
    console.log(`Wow! ${edad} anios es una increible edad.`);
    rl.close()
})

// Paso 11: Manejamos el evento close con el metodo on
rl.on('close', () => {
    console.log('Gracias por usar este programa. Adios!');
    process.exit(0)
})

/**
📌 ¿Qué es args[0]?

Primero miremos esta línea:
const args = process.argv.slice(2);

🧠 ¿Qué es process.argv?
process.argv es un array que contiene todos los argumentos pasados al ejecutar tu programa desde la terminal.
Ejemplo si ejecutás: node app.js Maria
Entonces process.argv vale algo así como:

[
  '/ruta/a/node',        // process.argv[0]
  '/ruta/a/app.js',      // process.argv[1]
  'Maria'                // process.argv[2] ← ¡acá está el nombre del usuario!
]

📌 ¿Qué hace slice(2)?
Corta los dos primeros elementos (node y el archivo), y deja solo lo que vos pasaste:
const args = process.argv.slice(2); // ['Maria']

📌 Entonces args[0] es...
El primer argumento real que el usuario escribió al ejecutar el programa. Por ejemplo:
const userName = args[0]  'Invitado';
Eso significa:
Si el usuario escribió un nombre (ej. Maria), entonces userName = 'Maria'.
Si el usuario no escribió nada, entonces args[0] es undefined, y se usa 'Invitado'.

✅ Resumen
const args = process.argv.slice(2);
const userName = args[0]  'Invitado';
Significa:
🗣️ "Tomá el primer argumento que el usuario pasó.
Si no pasó nada, usá 'Invitado'."
 */


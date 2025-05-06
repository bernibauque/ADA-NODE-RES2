// Ejercicio 1: ¡Crea tu perfil digital! 🌟
// Consigna:
// Imagina que acabas de unirte a una red social donde puedes 
// crear tu perfil digital básico. Tu misión es:
// 1.	Crear un archivo llamado perfil.json. 
// 2.	Dentro de este archivo, guarda información sobre ti: nombre, 
// edad y tu ciudad favorita.
// 3.	Usa el módulo fs para escribir este archivo desde Node.js.
// Pista: Utiliza JSON.stringify para convertir tu información en un 
// formato que pueda guardarse en el archivo.

// importo fs
const fs = require('fs')

// creamos un objeto que representa nuestro perfil
const perfil = {
    nombre: "Naza",
    edad: 27,
    ciudadFavorita: "Cordoba"
}

//convertimos el obj en un formato json 
fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err) => {
    if (err) {
        console.error("Hubo un erro al crear tu perfil:", err);
    } else {
        console.log("Felicidades, perfil creado exitosamente");
    }
})

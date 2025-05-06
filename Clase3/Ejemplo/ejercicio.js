// CONSIGNA:
// Vamos a crear una aplicación básica en Node.js para gestionar una lista 
// de tareas.
// Usaremos módulos nativos como 'fs' y trabajaremos con JSON para 
// almacenar nuestras tareas.
// El objetivo es que aprendan a leer y escribir en archivos, 
// usar rutas relativas y absolutas,
// y trabajar con datos JSON en Node.js.

// PASOS A SEGUIR:
// 1. Inicializar un proyecto con `npm init` (opcional).
// 2. Crear un archivo `tareas.json` para almacenar las tareas.
// 3. Desarrollar un script que permita:
//    - Listar las tareas.
//    - Agregar una nueva tarea.

// Importamos el modulo fs
const fs = require('fs')

// Definimos la ruta del archivo tareas.json 
const filePath = './tareas.json'

// leemos los argumentos pasados desde la linea de comandos
const args = process.argv.slice(2)
const comando = args[0] // primer argumento: el comando a ejecutar
const descripcion = args.slice(1).join(' ') // el resto de los argumentos: la descripcion de la tarea

// funcion 1 - para leer el archivo json y devolver las tareas
const leerTareas = () => {
    const contenido = fs.readFileSync(filePath, 'utf-8') //leer el archivo de tareas.json
    return JSON.parse(contenido) // convertir el contenido json a un array de tareas
}

// funcion 2 - para escribir tareas en el archivo json
const escribirTareas = (tareas) => {
    const json = JSON.stringify(tareas, null, 2) // convertir el array de tareas en formato json
    fs.writeFileSync(filePath, json, 'utf-8') // guardar el json en el archivo
}

// funcion 3 - para agregar una tarea
const agregarTarea = (descripcion) => {
    const tareas = leerTareas() // leer tareas actuales
    tareas.push({ id: tareas.length + 1, descripcion, completada: false }) // agregar una nueva tarea
    escribirTareas(tareas) // guardar las tareas actualiadas
    console.log('Tarea agregada: ', descripcion);
}

// funcion 4 - Para listar todas las tareas
const listarTareas = () => {
    const tareas = leerTareas() // leer tareas actuales
    console.log('Lista de tareas: ');
    tareas.forEach((tarea) => {
        const estado = tarea.completada ? 'si esta completada' : 'no esta completada' // mostrar si la tarea estaa completada
        console.log(`${tarea.id}.${tarea.descripcion} - ${estado}`);
    })
}

// Funcion 5 - para marcar la tarea como completada
const completarTarea = (id) => {
    const tareas = leerTareas() // leemos las tareas actuales
    const tarea = tareas.find((t) => t.id === parseInt(id)) // buscar la tarea por id
    if (tarea) {
        tarea.completada = true // marcar la tarea como completada
        escribirTareas(tareas) // guardar las tareas actualizadas
        console.log('Tarea completada: ', tarea.descripcion);
    } else {
        console.log('Tarea no encontrada');
    }
}

// Manejo de comandos
if (comando === 'agregar') {
    agregarTarea(descripcion)
} else if (comando === 'listar') {
    listarTareas()
} else if (comando === 'completar') {
    completarTarea(descripcion)
} else {
    console.log('Comando no reconocido. Usar: "agregar", "listar" o "completar"');
}




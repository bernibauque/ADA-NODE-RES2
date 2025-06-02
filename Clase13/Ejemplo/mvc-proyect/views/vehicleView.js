// objeto que contenga metodos para formatear respuestas
const vehicleView = {
    // metodo para formatear
    formatResponse: (vehicle) => {
        // verificamos si el vehiculo es null o undefined (no se encuentre)
        if (!vehicle) {
            // si no se encontro devolvemos un json con un mensaje de error
            return JSON.stringify({
                status: "error",
                message: "Vehiculo no encontrado"
            })
        }
        // si se encontro, devuelvo un estado de exito y el vehiculo
        return JSON.stringify({
            status: "success",
            data: vehicle
        })
    }
}

module.exports = vehicleView
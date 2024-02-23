const numerosGanadores = [4,7,9,12,24,27,36,46,53,60]
const nombresGanadores = ["Juan","Luis","Jesus","Mateo","Camilo","Nicolas","Santiago","Allan","Juan Camilo","Angelo"]

const dato = "Luis"
let indexGanador = 0

// Se compara si el dato es un String o un Integer, para encontrar su numero de index
if (typeof dato === "string") {
    indexGanador = nombresGanadores.findIndex(numero => numero === dato)
} else if (Number.isInteger(dato)){
    indexGanador = numerosGanadores.findIndex(nombre => nombre === dato)
}

// Si se encuentra el index, se mostrara al usuario su nombre, su boleto y se le notificara que es el ganador
if (indexGanador===-1) {
    console.log("Lo sentimos, usted no es un ganador del sorteo.")
} else {
    console.log(
        `Felicidades ${nombresGanadores[indexGanador]}, su numero de boleto es ${numerosGanadores[indexGanador]}, usted ha ganado la rifa!`)
}

const calificaciones = [100,61,38,83,67,42,24,10,47,80,50,90,95,71]

const calificacionesAprobadas = calificaciones.filter(calificacion => calificacion >= 70)

const promedioCalificacionesAprobadas = calificacionesAprobadas.reduce((promedio,calificacion) => {
    promedio += calificacion
    return promedio
}, 0) / calificacionesAprobadas.length

console.log((`Lista de calificaciones originales: ${calificaciones.join(", ")}`))
console.log((`Calificaciones aprobadas: ${calificacionesAprobadas.join(", ")}`))
console.log((`Promedio de calificaciones aprobadas: ${promedioCalificacionesAprobadas}`))
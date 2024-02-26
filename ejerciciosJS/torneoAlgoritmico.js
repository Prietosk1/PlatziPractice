function encontrarGanador (enfrentamientos, resultados) {
    const tablaVictorias = [] // Se guardaran los nombres de los equipos junto con sus puntos
    let ganadorRonda // Se guarda el nombre del ganador de dicha ronda
    let isRegistered = false
    let indexGanadorRonda = 0
    let mayorPuntuacion = 0
    let equipoGanador = ""

    // Se pasa por todos los enfrentamientos
    for (i = 0; i < enfrentamientos.length; i++) {
        // Revisamos si el equipo ganador fue el local o el visitante
        if (resultados[i] === 1) {
            indexGanadorRonda = 0
        } else {
            indexGanadorRonda = 1
        }
        // Guardamos el nombre del equipo ganador de dicha ronda
        ganadorRonda = enfrentamientos[i][indexGanadorRonda]
        // Revisaremos si hemos registrado ese equipo en la tabla de victorias
        for (j = 0; j < tablaVictorias.length; j++) {
            isRegistered = tablaVictorias[j].includes(ganadorRonda)

            // Si encontramos que el equipo ya esta en la tabla se le agrega sus respectivos puntos
            if (isRegistered === true) {
                tablaVictorias[j][1] += 3
                j = tablaVictorias.length
            }
        }
        // Si nunca se encontro en la tabla, este se agrega y se le otorga su primer punto
        if (isRegistered === false) {
            tablaVictorias.push([ganadorRonda,3])
        }
    }

    // Compararemos que equipo obtuvo mas puntos
    for (i = 0; i < tablaVictorias.length; i++) {
        if (tablaVictorias[i][1] > mayorPuntuacion) {
            mayorPuntuacion = tablaVictorias[i][1]
            equipoGanador = tablaVictorias[i][0]
        }
    }

    return `El equipo ganador fue ${equipoGanador} con una puntuacion total de ${mayorPuntuacion} puntos.`
}

const enfrentamientosEquipos = [
    ["Javascript","Python"],  //Python gana
    ["Java","Javascript"], //Java gana
    ["Java","Python"], //Java gana
    ["C+","Javascript"], //Javascript gana
    ["C+","Python"], //C+ gana
    ["C+","Java"] //Java gana
]

const resultadosEnfrentamientos = [0,1,1,0,1,0]

console.log(encontrarGanador(enfrentamientosEquipos,resultadosEnfrentamientos))
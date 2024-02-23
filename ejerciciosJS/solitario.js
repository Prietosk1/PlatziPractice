function barajarMazo (mazo) {
    const nuevoMazo = []
    const tamañoMazo = mazo.length -1
    for (i=0; i <= tamañoMazo;i++) {
        let indiceRandom = Math.floor(Math.random()*(tamañoMazo+1-i))
        nuevoMazo.push(mazo[indiceRandom])
        mazo.splice(indiceRandom, 1)
    }
    return nuevoMazo
}

function repartirMazo (mazo, cartasRepartidas) {
    const nuevoMazo = mazo.splice(0,cartasRepartidas)
    return nuevoMazo
}

const numeros = [1,2,3,4,5,6,7,8,9,10]
const cantidadCartas = 8
const listaCartas = ["A♣️","2♣️","3♣️","4♣️","5♣️","6♣️","7♣️","8♣️","9♣️","10♣️","J♣️","Q♣️","K♣️","A♥️","2♥️","3♥️","4♥️","5♥️","6♥️","7♥️","8♥️","9♥️","10♥️","J♥️","Q♥️","K♥️","A♠️","2♠️","3♠️","4♠️","5♠️","6♠️","7♠️","8♠️","9♠️","10♠️","J♠️","Q♠️","K♠️","A♦️","2♦️","3♦️","4♦️","5♦️","6♦️","7♦️","8♦️","9♦️","10♦️","J♦️","Q♦️","K♦️"]

const mazoReorganizado = barajarMazo(listaCartas)

const mazoJugador1 = repartirMazo(mazoReorganizado, 8)
const mazoJugador2 = repartirMazo(mazoReorganizado, 8)
const mazoJugador3 = repartirMazo(mazoReorganizado, 8)

console.log(`
    Mazo del Jugador 1: ${mazoJugador1}
    Mazo del Jugador 2: ${mazoJugador2}
    Mazo del Jugador 3: ${mazoJugador3}
    `)
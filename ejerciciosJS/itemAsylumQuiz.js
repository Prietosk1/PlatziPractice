function pistaTipoArma (tipo) {
    if (tipo==="melee") {
        return "Esta item se usa en combate de corto alcanze"
    } else if (tipo==="ranged") {
        return "Esta item se usa en combates a distancia"
    } else {
        return "Este item puede tener usos variados"
    }
}

function pistaTamañoArma (tamaño) {
    if (tamaño==="grande") {
        return "El tamaño de este item es grande"
    } else if (tamaño==="mediano") {
        return "El tamaño de este item es mediano"
    } else {
        return "El tamaño de este item es pequeño"
    }
}

function pistaReferenciaArma (referencia) {
    if (referencia==="vidaReal") {
        return "Este item hace referencia a algo en la vida real"
    } else if (referencia==="internet") {
        return "Este item hace referencia a algo ficticio o en internet"
    }
}

function conjuntoArmas (id, nombreArma, tipoArma, tamañoArma, referenciaArma) {
    this.id = id
    this.nombreArma = nombreArma
    this.tipoArma = tipoArma
    this.tamañoArma = tamañoArma
    this.referenciaArma = referenciaArma
    this.pista1 = pistaReferenciaArma(referenciaArma)
    this.pista2 = pistaTamañoArma(tamañoArma)
    this.pista3 = pistaTipoArma(tipoArma)

    this.secuenciaPistas = function (pistas) {
        switch (pistas) {
            case 0:
                return `Pista 1: ${this.pista1}`
            break;
            case 1:
                return `Pista 1: ${this.pista1} 
                Pista 2 ${this.pista2}`
            break;
            default:
                return `Pista 1: ${this.pista1} 
                Pista 2: ${this.pista2}
                Pista 3: ${this.pista3}`
        }
    }
}

const allusions = new conjuntoArmas(1,"Allusions","melee","grande","internet")
const birch = new conjuntoArmas(2,"Birch tree","melee","grande","vidaReal")
const judge = new conjuntoArmas(3,"Judge","melee","mediano","internet")
const axe = new conjuntoArmas(4,"Axe","melee","mediano","vidaReal")
const london = new conjuntoArmas(5,"London","melee","corto","internet")
const air = new conjuntoArmas(6,"Air","melee","corto","vidaReal")
const america = new conjuntoArmas(7,"America","ranged","grande","vidaReal")
const brimstone = new conjuntoArmas(8,"brimstone","ranged","grande","internet")
const airpod = new conjuntoArmas(9,"Airpod Shotty","ranged","mediano","internet")
const canadian = new conjuntoArmas(10,"Canadian riot","ranged","mediano","vidaReal")
const bottle = new conjuntoArmas(11,"bottle","ranged","corto","vidaReal")
const fr = new conjuntoArmas(12,"fr???","ranged","corto","internet")
const bobm = new conjuntoArmas(13,"Bobm","misc","grande","vidaReal")
const joel = new conjuntoArmas(14,"Deployable joel","misc","grande","internet")
const blade = new conjuntoArmas(15,"Hamonic blade","misc","mediano","internet")
const lute = new conjuntoArmas(16,"Lute","misc","mediano","vidaReal")
const hours = new conjuntoArmas(17,"10 Hours Burst","misc","corto","internet")
const harmonica = new conjuntoArmas(18,"Harmonica","misc","corto","vidaReal")

const listaItems = [allusions,birch,judge,axe,london,air,america,brimstone,airpod,canadian,bottle,fr,bobm,joel,blade,lute,hours,harmonica]
const numeroRandom = Math.floor(Math.random() * 18)

const itemElegido = listaItems[numeroRandom]
const nombreItem = itemElegido.nombreArma
let intentos = 0
let victoria = false

alert(`-----------Item Asylum Quiz-----------
    Bienvenido a este test, se generara una palabra aleatoria
    relacionada con objetos de Item asylum las reglas son estas:
    - Tendras pistas que te permitiran saber el nombre del item.
    - Tienes 3 intentos para acertar.
    - Existen 16 objetos en total.
    
    Ingresa tu palabra y buena Suerte. `
)

while (intentos<3) {
    let respuesta = prompt(
        `
        ${itemElegido.secuenciaPistas(intentos)}

        Lista de items:
        - Allusions
        - Birch tree
        - Judge
        - Axe
        - London
        - Air
        - America
        - Brimstone
        - Airpod shotty
        - Canadian riot
        - Bottle
        - Fr???
        - Bobm
        - Deployable joel
        - Hamonic blade
        - Lute
        - 10 Hour Burst
        - Harmonica

        Ingresa tu palabra`);
        if (respuesta.toLowerCase() === nombreItem.toLowerCase()) {
            victoria = true
            break;
        } else {
            intentos += 1
            alert(`Palabra incorrecta, te quedan ${3 - intentos} intentos`)
        }
    
}

if (victoria === true) {
    alert(`Felicidades!!, completaste el juego en el ${intentos + 1} intento, la palabra correcta era ${nombreItem}`)
} else {
    alert(`Lo sentimos, la palabra correcta era ${nombreItem}`)
}
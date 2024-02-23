// Lista de transacciones
const transacciones = [
    {id: 1, descripcion: "Compras Megatiendas", cantidad: -200},
    {id: 2, descripcion: "Comision de apartamento", cantidad: 1800},
    {id: 3, descripcion: "Pago Administracion", cantidad: -120},
    {id: 4, descripcion: "Ofrenda y Diezmo", cantidad: -100},
    {id: 5, descripcion: "Regalo familiar", cantidad: 1000},
    {id: 6, descripcion: "Venta de comida", cantidad: 800},
    {id: 7, descripcion: "Pago de servicios", cantidad: -900},
]

// 1. Calcular el saldo total
function calcularSaldoTotal (listaTransacciones) {
    const montoTotal = listaTransacciones.reduce((sumatoria, valor) => sumatoria += valor.cantidad, 0)
    return `El monto total de todas las transacciones es: ${montoTotal}`
}

// 2. Transaccion mas grande
function encontrarTransaccionGrande (listaTransacciones) {
    let transaccionAlta = 0
    const indiceTransaccion = listaTransacciones.reduce((transaccion, valor) => {
        // Se guardara la id del monto de transaccion mas alto
        if (Math.abs(valor.cantidad) > transaccionAlta) {
            transaccionAlta = Math.abs(valor.cantidad)
            transaccion = valor.id
        }
        return transaccion
    },0)
    return `Datos de la transaccion mas alta: 
    - Id: ${listaTransacciones[indiceTransaccion - 1].id}
    - Descripcion: ${listaTransacciones[indiceTransaccion - 1].descripcion}
    - Cantidad: ${listaTransacciones[indiceTransaccion - 1].cantidad}`
}

// 3. Transacciones de compra
function transaccionesCompra (listaTransacciones) {
    return listaTransacciones.filter(transacciones => transacciones.cantidad < 0)
}

// 4. Encontrar transaccion por descripcion
function descripcionTransacion (listaTransacciones, descripcionIngresada) {
    const transaccionEncontrada = listaTransacciones.find(descripciones => descripciones.descripcion === descripcionIngresada)
    if (transaccionEncontrada === undefined) {
        return `Lo sentimos, la transaccion no fue encontrada, ingrese un nombre valido.`
    } else {
        return `Transaccion encontrada por descripcion:
        - Id: ${transaccionEncontrada.id}
        - Descripcion: ${transaccionEncontrada.descripcion}
        - Cantidad: ${transaccionEncontrada.cantidad}`
    }
}

// 5. Indice de una transaccion por monto
function montoTransaccion (listaTransacciones, montoIngresado) {
    const indiceTransaccion = listaTransacciones.findIndex(montos => montos.cantidad === montoIngresado)
    if (indiceTransaccion === -1) {
        return `Lo sentimos, la transaccion no fue encontrada, ingrese un monto valido.`
    } else {
        return `Transaccion encontrada por monto:
        - Id: ${listaTransacciones[indiceTransaccion].id}
        - Descripcion: ${listaTransacciones[indiceTransaccion].descripcion}
        - Cantidad: ${listaTransacciones[indiceTransaccion].cantidad}`
    }
}

// 6. Actualizar descripciones 
function actualizarDescripciones (listaTransacciones) {
    listaTransacciones.forEach(descripciones => {
        if (descripciones.cantidad > 0) {
            return descripciones.descripcion = `Ingreso: ${descripciones.descripcion}`
        } else {
            return descripciones.descripcion = `Gasto: ${descripciones.descripcion}`
        }
    })
    return listaTransacciones
}
/*
function managePlaylist (playlist, newSong) {
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}
*/
// Ejecuciones de funciones
console.log(calcularSaldoTotal(transacciones))
console.log(encontrarTransaccionGrande(transacciones))
console.log(transaccionesCompra(transacciones))
console.log(descripcionTransacion(transacciones, "Compras Megatiendas"))
console.log(montoTransaccion(transacciones, -120))
console.log(actualizarDescripciones(transacciones))
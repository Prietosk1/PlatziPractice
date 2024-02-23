let libreria = []
let salirPrograma = false

alert(`-----Libreria-----
    Bienvenido a nuestra libreria, aqui le ofrecemos una
    excelente cantidad de libros. Usted podra hacer cosas
    como:
     - Agregar libros a la biblioteca
     - Remover libros de la biblioteca
     - Observar la pila de libros actual
    `)

while (salirPrograma === false) {
    let accion = parseInt(prompt(
        `¿Que desea hacer?
        1. Agregar libros
        2. Remover ultimo libro agregado
        3. Ver libros actuales
        4. Salir de este programa
            
        Por favor, ingrese el numero de la opcion que desea.`))
    switch (accion) {
        case 1:
            let libroAgregado = prompt("¿Cual es el nombre del libro que desea agregar?")
            libreria.push(libroAgregado);
            alert("Su libro se ha agregado con exito")
        break;
        case 2:
            if (libreria.length === 0) {
                alert("La libreria esta vacia, no se ha realizado ninguna accion.")
            } else {
                alert("El ultimo libro agregado se ha eliminado con exito!")
            }
            libreria.pop();
        break;
        case 3:
            let listaLibros = ""
            let tamañoLibreria = libreria.length
            if (tamañoLibreria === 0) {
                alert(
                    `No hay libros disponibles por el momento,
                si deseas puedes agregar uno. ${tamañoLibreria}`)
            } else {
                alert(
                `Libros actuales:
                - ${libreria.join(", ")}`)
            }
        break;
        case 4:
            salirPrograma = true
            alert(`Gracias por usar nuestro programa, vuelva pronto!`)
        break;
        default:
            alert("Opcion invalida o incorrecta, ingreselo nuevamente")
    }
}
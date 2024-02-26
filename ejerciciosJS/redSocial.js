function ingresar(usuarios,timeline) {
    // Se lee la informacion enviada por el usuario
    const usuario = prompt("Bienvenido, por favor ingrese su usuario:")
    const contraseña = prompt("Por favor ingrese su contraseña:")

    // Se recorre por todos los nombres y contraseñas de la base de datos
    for (i = 0; i < usuarios.length; i++) {
        let usuarioRegistrado = usuarios[i].username
        let contraseñaRegistrada = usuarios[i].password
        let timelineRegistrada = timeline[i].timeline
        // Se compara en cada iteracion si el usuario y la contraseña ingresadas hacen parte de esta base
        if (usuario.toLowerCase === usuarioRegistrado.toLowerCase) {
            // de ser asi, se les mostrara el timeline de su respectivo usuario
            if (contraseña == contraseñaRegistrada) {
                return alert(
                    `Usuario y contraseña correctas, su timeline es la siguiente:
                    - ${timelineRegistrada}`)
            }
        }
    }
    // De lo contrario se mostrara que las credenciales ingresadas estan incorrectas
    alert("Usuario o/y contraseña incorrecta/s, por favor intente nuevamente.")
}

// Bases de datos
const datosUsuarios = [
    {
        username: "Oski",
        password: 9000
    },
    {
        username: "Itz_Sax",
        password: 12345
    }, {
        username: "King_Nolo",
        password: 54321
    }
]

const datosTimeline = [
    {
        username: "Oski",
        timeline: "El desarrollo Front End es mi pasion"
    },
    {
        username: "Itz_Sax",
        timeline: "Llegare a diamante en 3v3..."
    },
    {
        username: "King_Nolo",
        timeline: "Hoy se sube nuevo video"
    }
]

// Invocamos la funcion
ingresar(datosUsuarios,datosTimeline)
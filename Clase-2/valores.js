// ctrl + D, seleccionan la misma palabra multiples veces

let nombre = "matias" // Tipo: String
let edad = 30 // tipo number
let decimales = 3.14 // tipo number
let activo = true // boolean
let vacio // undefined
let nulo = null // nulo
let materias = ["PNT2", "TP2"]

// console.log("nombre:",typeof nombre)
// console.log("edad:",typeof edad)
// console.log("decimales:",typeof decimales)
// console.log("activo:",typeof activo)
// console.log("vacio:",typeof vacio)
// console.log("nulo:",typeof nulo)
// console.log("materias:",typeof materias)

// console.log("array materias: ", materias[2])

//          index = [0, 1]
let arrayUsuarios = ["Alan", "Lucas"]

let usuario = {
    // llave: valor
    // key : value
    // si la llave, se va a llamar del mismo nombre que el value, solo paso el value
    nombre,
    apellido: "Duro",
    estado: activo,
    materias: materias
}




console.log(usuario["materias"]);
console.log(usuario.materias);

console.log("El alumno " + usuario.nombre + " tiene las materias " + usuario.materias);
console.log(`El alumno ${usuario.nombre} tiene las materias ${usuario.materias}`);




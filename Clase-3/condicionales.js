
let numero = "5"

if(numero !== 5){
    // console.log("numero es 5");
    
}else{
    console.log("numero no es 5, numero es: ", numero);

}

let user = {
    nombre: "",
    estado: false,
    materia: []
}


// console.log(user.nacimiento);

user.nacimiento = "16/10"

// console.log(user.nacimiento);




// if(user.apellido){
//     console.log("existe");
    
// }else{
//     console.log("falsy");
    
// }


let edad = 20
let respuesta

if(edad < 18){

    respuesta = "Licencia Denegada"
} else if(edad < 21){

    respuesta = "Licencia con tutor"
} else{
    respuesta = "Licencia Otorgada"
}

// console.log(respuesta);


// Operador Ternario
// ? , :
let licencia = (edad < 18) ? "Licencia Denegada" : "Licencia Otorgada"
let licencia2 = (edad < 18) ? "Licencia Denegada" : (edad < 21) ? "Permitido con tutor" : "Licencia Otorgada"

// console.log(licencia);


// AND ( && ) ejecuta la derecha, solo si la izquierda es verdadera/positiva

let nombre = "Mateo"

// nombre ? console.log(nombre) : null

// nombre && console.log(nombre);
// en este caso, nombre solo ejecuta el console log, si la variable nombre tiene un valor positivo

let usuario = {
    username: "alumno1",
    email: "alumno@ort.edu.ar",
    password: "" 
}

if(usuario.username && usuario.email && usuario.password){
    console.log('Log in');
    
}else{
    console.log("Faltan datos");
    
}

// Operador ( OR ) tambien expresado como || 
// devolver el primer valor positivo / verdadero

let passwordHasheada = ""

let usuario2 = {
    username: "",
    email: "alumno@ort.edu.ar",
    password: passwordHasheada || "123"
}

console.log(usuario2);

if(usuario2.password && usuario2.email || usuario2.username){
    console.log("log in");
    
}

// si yo quiero evaluar que tenemos al menos uno de los datos del alumno, utilizo el ||

if(usuario.apellido || usuario.direccion || usuario.nacimiento){

}else{
    console.log("no se cumplio ninguno");
    
}
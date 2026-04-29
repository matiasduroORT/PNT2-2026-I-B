

// 1- funcion declarada
// se puede llamar antes de su definicion, hosting


console.log(saludo());

function saludo(){

    return "Hola"
}
// console.log(nombre);

// var nombre = "Lucas"


// funcion expresada
// no se puede llamar antes de declararla

const despedir = function(){

    return "Adios"
}


// funcion flecha ( arrow function)
// tiene una sintaxis mas corta, se puede hacer en una sola linea
// y en ese caso, el return es implicito
const despedir2 = () => {

    return "Adios"
}

const despedir3 = () => "Adios"

let array = [2, 3, 4, 5]

array.map(function(num){

    return num + 1
})

array.map((num) => num + 1)

array.map((num) =>{
    
    return num + 1

})



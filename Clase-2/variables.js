// Para comentar y descomentar rapidamente, es ctrl + /
// ctrl + shift + 7

// tenemos 3 formas de declarar una variable

// var 
// var no se recomienda en codigo moderno
// var es un tipo de variable, que se puede redeclarar y reasignar

// var nombre = "Matias"

// console.log(nombre);

// var nombre = "Lucas"

// nombre = "Lucas"

// console.log(nombre);

// let
// let se puede reasginar, pero no redeclarar en el mismo scope

// let edad = 20

// if(edad > 18){
//     let edad = 25
// console.log(edad);

// }

// console.log(edad);
// // let edad = 25

// console.log(edad);


// const
// const no se puede reasignar, ni redeclarar, en el mismo scope


const materias = ["PNT2", "TP2"]

 materias = ["TP3"]


console.log(materias);
if(materias){
    const materias = ["TP3"]
    console.log(materias);

}

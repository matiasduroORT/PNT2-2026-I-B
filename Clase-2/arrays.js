// let numeros = [1, 2, 3]

// console.log(numeros);
// push: agrega un elemento al final del array
// let longitud = numeros.push("manzana")

// console.log(numeros);
// console.log(longitud);
// console.log(numeros.length);

let numeros = [1, 2, 3]

// console.log(numeros);

// pop: elimina el ultimo elemento
numeros.pop()

// console.log(numeros);

// shift: elimina el primer elemento
numeros.shift()

// console.log(numeros);

// unshift: agregar un elemento al comienzo
numeros.unshift(8)
// console.log(numeros);


let compraSupermercado = ["manzana", "uva", "sandia"]

// metodo MAP:
let result = compraSupermercado.map(function(fruta){
    return fruta + " 7"
})
// console.log("resultado: ", result);

// console.log("compraSupermercado", compraSupermercado);

// metodo Filter
// genera un nuevo array, a partir de el filtrado del array original

let numbers = [2, 5, 7, 9, 20]

let menores = numbers.filter(function(num){
    return num < 7
})

let menores2 = numbers.filter(num => num < 7)

// console.log(menores);
// console.log(menores2);


// metodo find
// devuelve el primer elemento, que cumpla con la condicion

let encontrado = numbers.find(function(num){
    return num > 6
})

// console.log(encontrado);


// metodo some
// si alguno cumple con la condicion, retorna true

let hayMayores = numbers.some(function(num){
    return num > 18
})

// console.log(hayMayores);


// metodo Every
// si todos cumplen con la condicion, retorna true

let todosMayores = numbers.every(function(num){
    return num > 18
})

// console.log(todosMayores);

// metodo split
// separa un string, en un array, segun el separador

let nombre = "Mateo"

let rest = nombre.split("")

console.log(rest);

// metodo join
// une un array, y lo convierte en un string, segun el argumento de union

let unido = rest.join("_")

// console.log(unido);


// metodo reverse
// da vuelta un array
let reverso = rest.reverse()

console.log(reverso);



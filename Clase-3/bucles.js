
let numeros = [5, 6, 29, 27, 10]


// for clasico,  cuando sabes cuanto va a durar
for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    // console.log("element: ", element);

}


numeros.forEach(numero => {
    // console.log("numero: ", numero);  
})


// while()
// se va a ejecutar, siempre que la condicion se cumpla

let num = 8

while (num <= 10) {
    // console.log("numero es: ", num);
    num = num + 1
}


// do... while (se ejecuta al menos, una vez)

do {
    console.log("numero es: ", num);
    num = num + 1
} while (num < 5)


// FOR...OF ( SIRVE PARA RECORRER ARRAYS, O STRINGS) 

let frutas = ["manzana", "pera", "durazno"]

for (const fruta of frutas) {
    // console.log(fruta);

}


// FOR...IN ( SIRVE PARA RECORRER OBJETOS)

let persona = {
    nombre: "facu",
    edad: 20,
    estado: true,
    materias: ["PNT2", "TP2"]
}

for (const key in persona) {
    if (!Object.hasOwn(persona, key)) continue;

    // console.log(key);

    // const element = persona[key];

    // console.log(element);


}


let alumnos = [
    {
        nombre: "lucas",
        aprobado: true
    },
    {
        nombre: "mateo",
        aprobado: true
    },
    {
        nombre: "sofia",
        aprobado: true
    },
]


// console.log(alumnos);

for (const alumno of alumnos) {
    

    console.log(alumno);

    for (const key in alumno) {
        if (!Object.hasOwn(alumno, key)) continue;
        
        const element = alumno[key];
        
        console.log("element: ", element);
        
    }
    
}

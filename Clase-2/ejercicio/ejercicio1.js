function invertirTexto(palabra){
    let convertidoArray = palabra.split("")
    let arrayInvertido = convertidoArray.reverse()
    let palabraInvertida = arrayInvertido.join("")
    return palabraInvertida
}

function esPalindromo(palabras){


    let palindromos = []

    palabras.forEach(function(palabra){

        let palabraLower = palabra.toLowerCase()

        let palabraInvertida = invertirTexto(palabraLower)        

        // console.log(palabraInvertida);
        // console.log("/////");

        if(palabraLower == palabraInvertida){
            palindromos.push(palabra)
        }

        
    });

    return palindromos

}



const palabras = ["Sol", "Oso", "Ana", "Saludo", "Reconocer", "Neuquen", "Teclado"]


console.log("resultado: ", esPalindromo(palabras))
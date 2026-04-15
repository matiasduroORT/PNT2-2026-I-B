function suma(num1, num2) {

    return num1 + num2
}

function resta(num1, num2) {

    return num1 - num2
}


// console.log(suma(2, 10));
// console.log(resta(2, 10));


// Callback: Funcion que se pasa como argumento a otra


function operacionMatematica(num1, num2, callback) {

    // console.log(callback);


    return callback(num1, num2)
}

// console.log("Suma: ", operacionMatematica(5, 10, suma));
// console.log("Resta: ", operacionMatematica(5, 10, resta));
// console.log("Multiplicar: ", operacionMatematica(5, 10, function(a, b){
//     return a * b
// }));
// console.log("Multiplicar: ", operacionMatematica(5, 10, (a, b ) => a * b));


const numeros = [1, 2, 3, 4, 5]

numeros.map((num) => num * 2)


// callbacks asincronicos


// patron: ERROR-FIRST
// EL CALLBACK siempre recibe dos parametros (Error, resultado)
// si todo sale mal => callback(error, null)
// si todo sale bien => callback(null, resultado)

function obtenerUsuario(id, callback) {

    setTimeout(() => {

        if (id === 3) {
            // simulamos que el usuario 3 no existe
            // Primer argumento, va a ser el error, segundo argumento, que seria la respuesta, va a ser null
            return callback("Usuario 3 no encontrado", null)
        }

        // si todo ok, primer argumento = null (no hay error), segundo argumento = el dato

        return callback(null, { id, nombre: `Usuario ${id} encontrado!` })

    }, 3000);

}

const findUser = (error, usuario) => {

    if (error) {
        console.log("Sucedio un error: ", error);

        return
    }

    console.log("Usuariuo encontrado: ", usuario);


}

const respuesta1 = obtenerUsuario(7, findUser)
const respuesta2 = obtenerUsuario(3, findUser)
const respuesta3 = obtenerUsuario(28, findUser)


// CALLBACK HELL 


function verificarCliente(clienteId, callback) {
    setTimeout(() => {

        if (clienteId === 99) {
            return callback("Cliente no encontrado", null)

        }

        return callback(null, { id: clienteId, nombre: "Mateo", tipo: "VIP" })

    }, 1000);
}

function obtenerHistorial(clienteId, callback) {
    setTimeout(() => {

        if (clienteId === 99) {
            return callback("Historial no encontrado", null)

        }

        return callback(null, { clienteId, pedidosPrevios: 15, totalGastado: 10000 })

    }, 1000);
}

function calcularDescuento(tipoCliente, historial, callback) {
    setTimeout(() => {


        const descuento = tipoCliente === "VIP" && historial.pedidosPrevios > 10 ? 0.20 : 0.05

        callback(null, descuento)

    }, 1000);
}





function procesarPedido(clienteId) {

    verificarCliente(clienteId, (err, cliente) => {
        if (err) {
            console.log(err);
            return
        }

        obtenerHistorial(cliente.id, (err, historial) => {
            if (err) {
                console.log(err);
                return
            }

            calcularDescuento(cliente.tipo, historial, (err, descuento) => {

                if (err) {
                    console.log(err);
                    return
                }
            })
        })
    })

}






procesarPedido(7)
// Promesas

// Las promesas representan un valor que todaiva no existe
// pero va a existir en el futuro



// Cuando creamos una proemsa
// new promise: recibe una funcion con dos parametros
// resolve(valor) => lo llamamos cuando todo sale bien
// reject(motivo) => lo llamamos cuando algo mal

function obtenerUsuarioPromise(id) {


    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // console.log("2");


            if (id === 3) {

                return reject("Usuario 3 no encontrado")
            }

            return resolve({ id, nombre: `Usuario ${id} encontrado!` })

        }, 2000);


    })

    // setTimeout(() => {

    //     if (id === 3) {
    //         // simulamos que el usuario 3 no existe
    //         // Primer argumento, va a ser el error, segundo argumento, que seria la respuesta, va a ser null
    //         return callback("Usuario 3 no encontrado", null)
    //     }

    //     // si todo ok, primer argumento = null (no hay error), segundo argumento = el dato

    //     return callback(null, { id, nombre: `Usuario ${id} encontrado!` })

    // }, 3000);

}

// console.log("1");


// console.log(obtenerUsuarioPromise(7));

let resultado = obtenerUsuarioPromise(6)

// console.log("3");

setTimeout(() => {
    // console.log(resultado);

}, 3000);


// 3 metodos de promesas
// THEN ->  se ejecuta cuando la promesa tiene exito (resolve)
// CATCH -> atrapa cualquier error de toda la cadena
// FINALLY -> totalmente opcional: se ejecuta siempre al final, haya fallado o no


let usuario

// obtenerUsuarioPromise(3).then(resolve => {

//     usuario = resolve
//     console.log(resolve);

// }).catch(reject => {

//     console.log(reject);

// }).finally(() => {
//     console.log("Termino");

// })



function verificarCliente(clienteId) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (clienteId === 99) {
                return reject("Cliente no encontrado")

            }

            return resolve({ id: clienteId, nombre: "Mateo", tipo: "VIP" })

        }, 2000);
    })

}

function obtenerHistorial(clienteId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (clienteId === 99) {
                return resolve("Historial no encontrado")

            }

            return reject({ clienteId, pedidosPrevios: 15, totalGastado: 10000 })

        }, 2000);
    })
}

function calcularDescuento(tipoCliente, historial) {

    return new Promise((resolve) => {

        setTimeout(() => {


            const descuento = tipoCliente === "VIP" && historial.pedidosPrevios > 10 ? 0.20 : 0.05

            resolve(descuento)

        }, 2000);

    })
}




let cliente;

// verificarCliente(7)
//     .then((clienteObtenido) => {
//         cliente = clienteObtenido
//         console.log("Cliente: ", cliente);
//         return obtenerHistorial(cliente.id)
//     })
//     .then((historial) => {
//         console.log("historial:", historial);

//         return calcularDescuento(cliente.tipo, historial)
//     })
//     .then((descuento) => {
//         console.log("Descuento: ", descuento);

//     })
//     .catch((err) => {
//         console.log(err);

//     })





// Promise.ALL

const getPedidos = () => {

    return new Promise((resolve) => {
        setTimeout(() => {

            resolve({ id: 1, mesa: 3, total: 200 }, { id: 2, mesa: 8, total: 400 })


        }, 3000);
    })
}

const getStock = () => {

    return new Promise((resolve) => {
        setTimeout(() => {

            resolve([{ ingrediente: "Harina", total: 5 },
            { ingrediente: "Tomate", total: 8 },
            { ingrediente: "Muzarella", total: 10 },])

        }, 3000);
    })
}

const getReview = () => {

    return new Promise((resolve) => {
        setTimeout(() => {

            resolve([
                { puntaje: 5 },
                { punta: 4 }
            ])
        }, 3000);
    })
}


Promise.all([getPedidos(), getStock(), getReview()])
    // .then(resultado => {
    //     console.log("RESULTADO PROMISE ALL: ", resultado);

    // })
    .then(([pedidos, stock, review]) => {
        // cuando las 3 esten listas, recibimos el array con los 3 resultados

        // console.log("pedidos: ", pedidos);
        // console.log("stock: ", stock);
        // console.log("review: ", review);

    }).catch((err) => {

        // console.log("error: ", err);

    })


// ASYNC / AWAIT
// Puedo ya declarar que una funcion va a ser asincrona
// Puedo ya pedir que espere a que algo se ejecute, para despues continuar

// funcion declarada: 
// async function miFuncion(){}

// arrow function:
// const miFuncion = async () => {}

// const async miFunction (){}

const probarAsincronida = async (id) => {

    try {
        
    const respuesta = await obtenerUsuarioPromise(id)

    console.log(respuesta);

    } catch (error) {

        console.log("error: ", error);
        
        
    }
    
}

probarAsincronida(7)
probarAsincronida(5)
probarAsincronida(9)
probarAsincronida(3)

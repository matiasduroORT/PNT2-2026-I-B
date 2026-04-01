// en una funcion, separa y devolve un objeto, con los hombres y mujeres en dos arrays separados



const usuarios = [
    { nombre: "Ana", sexo: "F" },
    { nombre: "Facu", sexo: "M" },
    { nombre: "Sofia", sexo: "F" },
    { nombre: "Manuel", sexo: "M" },
    { nombre: "Martina", sexo: "F" },
]


const separarUsuarios = (usuarios) => {

    let mujeres = []
    let hombres = []


    for (const user of usuarios) {
        console.log(user);

        if (user.sexo === "F") {

            mujeres.push(user)

        } else {
            hombres.push(user)
        }

    }

    return {
        mujeres,
        hombres
    }
}



console.log(separarUsuarios(usuarios));
// {
//     mujeres: [{},{}]
//     hombres: [{},{}]
// }

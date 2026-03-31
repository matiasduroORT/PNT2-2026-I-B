

const nombre = "Matias"

    // index: 0, 1
const array = [2, 3]

const familia = {
    // key: value
    cantidad: 4,
    padre: {
        nombre,
        edad: 30
    },
    madre: {
        nombre: "Mar",
        edad: 30
    }


}

const usuario = {
    nombre: "Facu",
    edad: 15,
    activo: true,
    hablar: () => "hola",
    familia,
    aprobados: null,
    presentar(){
        // return "Hola, soy " + this.nombre + " tengo " + this.edad
        return ` Hola, soy ${this.nombre} y tengo ${this.edad}`
    
    },
    "sistema operativo": "Windows"
}


console.log(usuario["sistema operativo"]);


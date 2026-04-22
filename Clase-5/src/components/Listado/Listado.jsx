import React, { useState } from 'react'
import { TarjetaSimpson } from '../TarjetaSimpson/TarjetaSimpson'

export const Listado = () => {


  const [personajes, setPersonajes] = useState([])

  const llamarApi = async () => {

    // fetch("https://thesimpsonsapi.com/api/characters")
    // .then( respuesta => respuesta.json())
    // .then( data => console.log(data))

    const respuesta = await fetch("https://thesimpsonsapi.com/api/characters")
    const data = await respuesta.json()

    setPersonajes(data.results)
  }


  llamarApi()


  // hacer un fetch a la api de pokemon
  // traerse todos los pokemons

  return (
    <>

    {/* {
      personajes.map(personaje => (
        <TarjetaSimpson personaje={personaje}/>
      ))
    } */}

    </>
  )
}

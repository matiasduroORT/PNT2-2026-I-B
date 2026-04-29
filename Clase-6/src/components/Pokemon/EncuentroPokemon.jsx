import React, { useContext, useEffect, useState } from 'react'
import "./styles.css"
import { Navbar } from '../Navbar/Navbar'
import { PokemonCard } from './PokemonCard'
import { PokemonContext } from '../../contexts/PokemonContext'

export const EncuentroPokemon = (props) => {

    

    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(false)

      const { equipo, setEquipo } =  useContext(PokemonContext)
    


    const fetchRandomPokemon = async () => {


        const randomID = Math.floor(Math.random() * 151 + 1)


        setLoading(true)
        try {

            const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${randomID}`)
            const pokemon = await response.json()

            setTimeout(() => {

                setPokemon(pokemon)
                setLoading(false)
            }, 500);

        } catch (error) {
            console.log("error: ", error);

        }


    }




    useEffect(() => {
        fetchRandomPokemon()


    }, []) // <- el array de dependencias vacio, indica que lo que sea que este dentro del use effect, se ejecuta una sola vez, al momento de cargar el componente
    // }, [pokemon] ) // <- el array de dependencias con state pokemon, indica que el use effect se va a ejecutar, cada vez que el state pokemon cambie


    useEffect(() => {
    
        console.log("Equipo Actualizado");
        
    }, [equipo])
    

    const handlePass = () => {
        fetchRandomPokemon()
    }

    const handleCatch = () => {

        setEquipo([...equipo, pokemon])
        fetchRandomPokemon()


    }



    if (!pokemon) {

        return (
            <h2>No hay pokemons cerca...</h2>
        )
    }



    return (
    <>
            {
                loading ? (
                    <div className='loading'>
                        <h2>Buscando pokemon...</h2>
                    </div>
                ) : (
                    <PokemonCard equipo={equipo} pokemon={pokemon} handleCatch={handleCatch}  handlePass={handlePass}/>
                )
            }



        </>
    )
}

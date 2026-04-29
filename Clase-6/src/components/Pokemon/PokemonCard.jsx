import React from 'react'
import { PokemonTypes } from './PokemonTypes'

export const PokemonCard = ({pokemon, equipo, handleCatch, handlePass}) => {


    return (
        <div className='pokemon-card'>

            <div className='pokemon-header'>
                <h2 className='pokemon-title'>Aparecio un {pokemon.name}</h2>
            </div>

            <div className='pokemon-content'>
                <div className="pokemon-image-container">
                    <img src={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} className='pokemon-image' />
                </div>
            </div>

            <div className='pokemon-types'>
                {
                    pokemon.types.map((type) => (
                        <PokemonTypes type={type}/>
                    ))
                }
            </div>

            <div className="pokemon-stats">
                <div className="pokemon-stat">
                    <div className="pokemon-stat-label">Altura</div>
                    <div>{pokemon.height / 10} m</div>
                </div>
                <div className="pokemon-stat">
                    <div className="pokemon-stat-label">Peso</div>
                    <div>{pokemon.weight / 10} kg</div>
                </div>
            </div>

            <div className='pokemon-actions'>
                <button className='btn btn-catch' onClick={handleCatch} disabled={equipo.length < 6 ? false : true}>
                    {equipo.length < 6 ? "Capturar! " : "Equipo Completo"}
                </button>

                <button className='btn btn-pass' onClick={handlePass}>
                    Buscar otro
                </button>
            </div>

        </div>
    )
}

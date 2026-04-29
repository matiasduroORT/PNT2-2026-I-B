import React from 'react'

export const Equipo = ({pokemon}) => {

    return (
        <div key={pokemon.id} className="team-pokemon">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span className='team-pokemon-name'>{pokemon.name}</span>
        </div>
    )
}

import React from 'react'

export const PokemonTypes = ({ type }) => {
    return (
        <span key={type.type.name} className='pokemon-type'>
            {type.type.name}
        </span>
    )
}

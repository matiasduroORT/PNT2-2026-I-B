import React, { useContext } from 'react'
import { PokemonContext } from '../../contexts/PokemonContext'
import { Equipo } from './Equipo'

export const Navbar = () => {

  const { equipo } =  useContext(PokemonContext)


  return (
            <div className='navbar'>
            <div className="container">
                <div className='navbar-content'>
                    <div className="navbar-header">
                        <div className='team-counter'>
                            Equipo: {equipo.length}/6
                        </div>
                    </div>

                    <div className='team-section'>
                        <div className='team-label'>
                        Nuestro Equipo: 
                        </div>
                        {
                            equipo.map((pokemon ) => (
                                <Equipo pokemon={pokemon }/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>  
  )
}

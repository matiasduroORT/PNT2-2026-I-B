import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";


export const PokemonContext = createContext()


export const PokemonProvider = ({children}) => {

    const { user } = useContext(AuthContext)

        const [equipo, setEquipo] = useState([])
        


    return (
        <PokemonContext.Provider value={{equipo, setEquipo}}>
            { children }
        </PokemonContext.Provider>
    )
}
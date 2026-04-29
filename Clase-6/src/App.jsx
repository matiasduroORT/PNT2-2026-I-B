import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { EncuentroPokemon } from './components/Pokemon/EncuentroPokemon'
import { AuthContext, AuthProvider } from './contexts/AuthContext'
import { PokemonProvider } from './contexts/PokemonContext'

function App() {

  return (
    <>
    <AuthProvider>
      <PokemonProvider>
        <Navbar />
        <EncuentroPokemon />
      </PokemonProvider>
    </AuthProvider>

    </>
  )
}

export default App

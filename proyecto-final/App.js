import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Boton } from './components/Boton';
import { Card } from './components/Card';
import { PokeCard } from './components/PokeCard';
import { useEffect, useState } from 'react';

export default function App() {
    const [pokemon, setPokemon] = useState({})

    // hacer fetch a api pokemon, con un pokemon random


    
    const fetchPokemon = async () => {

          const randomID = Math.floor(Math.random() * 151 + 1)


        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`)
        const data = await resp.json()

        console.log("data: ", data.sprites.other.showdown.front_default);
        setPokemon(data)
        
    }

    const cambiarPokemon = () => {
      console.log("cambiar pokemon");
      
      fetchPokemon()
    }


    useEffect(() => {
       fetchPokemon()
    }, [])


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Clase 7</Text>
      {/* <Boton /> */}
      {/* <Card /> */}


      <PokeCard pokemon={pokemon} cambiarPokemon={cambiarPokemon}/>
      <StatusBar style="auto" />
    </ScrollView>
  );


}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dad8d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold"
  }


});

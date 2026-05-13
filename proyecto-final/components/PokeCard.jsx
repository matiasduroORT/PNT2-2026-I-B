import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const PokeCard = ({pokemon, cambiarPokemon}) => {

    // const [pokemon, setPokemon] = useState({})

    // const fetchPokemon = async () => {

    //     const resp = await fetch("https://pokeapi.co/api/v2/pokemon/6")
    //     const data = await resp.json()

    //     setPokemon(data)
    
    //     console.log("data: ", data.sprites.other.showdown.front_default);
    // }


    // useEffect(() => {
    //    fetchPokemon()
    // }, [])
    
    if(!pokemon){

        
        return (
            <View>
                <ActivityIndicator />
            </View>
        )
    }

            console.log("Pokemon: ", pokemon.name);


  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.logo} source={{uri: pokemon.sprites?.other?.showdown?.front_default}} />
        <Text style={styles.title}>{pokemon.name}</Text>
        <Text>{pokemon.id}</Text>

        <Button title='Cambiar Pokemon' onPress={cambiarPokemon}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f54a4a',
        alignItems: 'center',
        flexGrow: 1,
        marginTop: 50
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: "center",
        marginBottom: 12,
    },
    subTitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginBottom: 12
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: 20
    },
    imgPrincipal: {
        width: 200,
        height: 200,
        borderRadius: 12,

    },
    button: {
        backgroundColor: '#007aff',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    imgContainer: {
        backgroundColor: '#eee',
        width: "100%",
        height: 300,
        marginBottom: 30,
    }
})
 
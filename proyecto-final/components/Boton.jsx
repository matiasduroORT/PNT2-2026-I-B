import React from 'react'
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native'

export const Boton = () => {

  const handlePress = (fuente) => {


    console.log("Apretando: ", fuente);

  }




  return (
    <View>
      <Button title='Confirmar' onPress={() => handlePress("button")} color="#841584" />
      <TouchableOpacity style={styles.button} onPress={() => handlePress("touchable")}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: "#313131",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginTop: 30,
  },
  buttonText:{
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  }
})
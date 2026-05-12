import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Boton } from './components/Boton';
import { Card } from './components/Card';
import { PokeCard } from './components/PokeCard';

export default function App() {
    const [pokemon, setPokemon] = useState({})


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Clase 7</Text>
      {/* <Boton /> */}
      {/* <Card /> */}


      <PokeCard pokemon={pokemon}/>
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

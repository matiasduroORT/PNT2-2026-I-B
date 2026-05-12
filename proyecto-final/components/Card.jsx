import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Card = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Image
            style={styles.logo}
            source={{uri: "https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg"}}
        />
        <Text style={styles.title}>Bienvenidos parte 2</Text>
        <Text style={styles.subTitle}>Contactanos con mucha facilidad utilizando esta app</Text>

        <TouchableOpacity>
            <Image
                style={styles.imgPrincipal}
                source={{uri: "https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg"}}
            />
        </TouchableOpacity>

                <TouchableOpacity>
            <Image
                style={styles.imgPrincipal}
                source={{uri: "https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg"}}
            />
        </TouchableOpacity>

                <TouchableOpacity>
            <Image
                style={styles.imgPrincipal}
                source={{uri: "https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg"}}
            />
        </TouchableOpacity>
                <TouchableOpacity>
            <Image
                style={styles.imgPrincipal}
                source={{uri: "https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg"}}
            />
        </TouchableOpacity>

        

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
        width: 150,
        height: 100,
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
 
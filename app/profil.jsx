import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profil = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>Profil</Text>
        </View>
    )
}

export default Profil

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    textMuted: {
        color: '#444',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 12,
    }

})


import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function PokemonDetails({route}) {

    const {item} = route.params

    return (
        <View style={styles.container}>
            <Text>Détails du pokémon {item.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        backgroundColor: '#45D45D',
        marginBottom: 25,
        color: 'white',
        padding: 10
    }
});

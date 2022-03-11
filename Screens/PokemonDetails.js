import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';

export default function PokemonDetails({route}) {

    const {name, url, image} = route.params

    useEffect(() => {
        console.log('oui')
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Image
                style={styles.image}
                source={{uri : image}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    text: {
        backgroundColor: '#45D45D',
        marginBottom: 25,
        color: 'white',
        padding: 10,
    },

    title: {
        marginTop: 30,
        fontSize: 40,
        textTransform: 'capitalize',
        textAlign: 'center'

    },

    image: {
        width: 200,
        height: 200
    }
});

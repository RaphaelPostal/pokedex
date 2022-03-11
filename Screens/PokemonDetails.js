import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {getPokemons} from "../Api/pokemon";
import { FlatList } from "react-native";
import Pokemon from "../Components/Pokemon"

export default function PokemonDetails() {


    return (
        <View style={styles.container}>
            <Text>Détails</Text>
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

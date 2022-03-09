import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {getPokemons} from "./Api/pokemon";
import { FlatList } from "react-native";

export default function App() {

    const [newText, setNewText] = useState('Click me');
    const [number, setNumber] = useState(0);
    const [listPokemon, setListPokemon] = useState([]);
    const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon")

    const renderPokemon = ({item}) => (
        <>
            <Text style={styles.text}>{item.name}</Text>
        </>
    )

    const loadPokemons = (url) => {
        getPokemons(url).then(datas => {
            setListPokemon([...listPokemon, ...datas.results])
            setNextPage(datas.next)
        })
    }

    useEffect(() => {
        loadPokemons(nextPage)
    }, []);

    return (
        <View style={styles.container}>
            <Text>La super app</Text>
            <StatusBar style="auto" />

            <FlatList
                data={listPokemon}
                renderItem={renderPokemon}
                keyExtractor={item => item.name}
                onEndReached={() => {loadPokemons(nextPage)}}
            />
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

    text : {
        backgroundColor: '#45D45D',
        marginBottom: 25,
        color: 'white',
        padding: 10
    }
});
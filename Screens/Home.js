import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {getPokemons} from "../Api/pokemon";
import { FlatList } from "react-native";
import Pokemon from "../Components/Pokemon"

export default function Home({navigation}) {

    const [listPokemon, setListPokemon] = useState([]);
    const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon");
    const [isLoading, setIsLoading] = useState(true)

    const renderPokemon = ({item}) => (
        <Pokemon name={item.name} url={item.url} onPress={() => navigation.navigate('PokemonScreen', {item:item})} />
    )

    const loadPokemons = (url) => {
        setIsLoading(true)
        getPokemons(url).then(datas => {
            setListPokemon([...listPokemon, ...datas.results])
            setNextPage(datas.next)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        loadPokemons(nextPage)
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <FlatList
                data={listPokemon}
                renderItem={renderPokemon}
                keyExtractor={item => item.name}
                onEndReached={() => {
                    loadPokemons(nextPage)
                }}
            />
            <>
                {isLoading ? <ActivityIndicator size="large" color="#45D45D"/> : <></>}
            </>

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

import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native';
import {TextInput} from "react-native";
import {getPokemons} from "../Api/pokemon";
import Pokemon from "../Components/Pokemon";

export default function Search({navigation}) {
    //create a search function to find a pokemon by name
    const [pokemonName, setPokemonName] = useState(null);
    const [pokemonUrl, setPokemonUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    const searchPokemon = async (name) => {
        setLoading(true)
        try {
            getPokemons(`https://pokeapi.co/api/v2/pokemon/${name}`).then(datas => {

                if (datas !== undefined) {
                    setPokemonName(datas.forms[0].name);
                    setPokemonUrl(datas.forms[0].name);
                    console.log(datas)
                    setLoading(false)
                    console.log('resultat')
                } else {
                    console.log('aucun résultat')
                }

            })

        } catch (error) {
            setError(error);
            setLoading(false);
            console.log('erreur')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search for a Pokemon</Text>
            <Text style={styles.subtitle}>Enter a name below</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => {searchPokemon(text); setSearch(text)}}
                value={search}
                placeholder="Entrez un nom"
            />
            {loading ? (
                <ActivityIndicator size="large" color="#45D45D" />
            ) : (
                <View>
                    <Text style={styles.error}>Résultats : </Text>
                    {error ? (
                        <Text style={styles.error}>{error}</Text>
                    ) : (
                        <Pokemon name={pokemonName} url={pokemonUrl} navigation={navigation} />
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
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

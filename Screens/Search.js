import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native';
import {TextInput} from "react-native";
import {getOnePokemon} from "../Api/pokemon";
import Pokemon from "../Components/Pokemon";

export default function Search({navigation}) {
    //create a search function to find a pokemon by name
    const [pokemonName, setPokemonName] = useState(null);
    const [pokemonImage, setPokemonImage] = useState(null);
    const [pokemonType, setPokemonType] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    const searchPokemon = async (name) => {
        setLoading(true)
        try {
            getOnePokemon(`https://pokeapi.co/api/v2/pokemon/${name}`).then(datas => {

                if (datas !== undefined) {
                    setPokemonName(datas.forms[0].name);
                    setPokemonImage(datas.sprites.other['official-artwork'].front_default);
                    setPokemonType(datas.types[0].type.name);
                    setError(null);
                } else {
                    setError('Aucun résultat')
                }
                setLoading(false)

            })

        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => {searchPokemon(text.toLowerCase()); setSearch(text)}}
                value={search}
                placeholder="Entrez un nom"
            />
            {loading ? (
                <ActivityIndicator size="large" color="#45D45D" />
            ) : (
                <View>
                    <Text style={styles.error}>Résultats : </Text>
                    {error !== null ? (
                        <Text style={styles.error}>{error}</Text>
                    ) : (
                        <Pokemon name={pokemonName} image={pokemonImage} type={pokemonType} navigation={navigation} />
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
    },

    input: {
        width: '90%',
        borderColor: '#45D45D',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10

    }
});

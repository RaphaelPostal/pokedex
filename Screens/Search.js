import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native';
import {TextInput} from "react-native";
import {getOnePokemon} from "../Api/pokemon";
import Pokemon from "../Components/Pokemon";

export default function Search({navigation}) {

    const [pokemonName, setPokemonName] = useState(null);
    const [pokemonImage, setPokemonImage] = useState(null);
    const [pokemonType, setPokemonType] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(false);
    const [search, setSearch] = useState('');

    const searchPokemon = async (name) => {
        setLoading(true)
        if (name === '' || name === null) {
            setLoading(false)
            setResult(false)
        }
        try {
            getOnePokemon(`https://pokeapi.co/api/v2/pokemon/${name}`).then(datas => {

                if (datas !== undefined) {
                    setPokemonName(datas.forms[0].name);
                    setPokemonImage(datas.sprites.other['official-artwork'].front_default);
                    setPokemonType(datas.types[0].type.name);
                    setResult(true);
                } else {
                    setResult(false)
                }
                setLoading(false)

            })

        } catch (error) {
            setResult(error);
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
                    {result === false ? (
                        <Text style={styles.result}>Aucun résulat</Text>
                    ) : (
                        <Pokemon name={pokemonName} url={`https://pokeapi.co/api/v2/pokemon/${pokemonName}`} image={pokemonImage} type={pokemonType} navigation={navigation} />
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

    },

    result: {
        fontSize: 20,
        marginVertical: 15,
    }
});

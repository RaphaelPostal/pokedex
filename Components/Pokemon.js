import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from "react-native";
import baseImage from '../assets/pokeball.png'
import {getPokemons} from "../Api/pokemon";

export default function Pokemon(props) {

    const { url, name, navigation, ...restProps} = props
    const [pokemonDatas, setPokemonDatas] = useState([])
    const [pokemonImage, setPokemonImage] = useState(null)
    const [pokemonType, setPokemonType] = useState(null)

    if (pokemonDatas.length === 0) {
        if (url) {
            console.log(url)
            getPokemons(url).then(data => {
                setPokemonImage(data.sprites.other['official-artwork'].front_default)
                setPokemonType(data.types[0].type.name)
            })
        }

    }

    return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Détails', {name: name, url:url, image: pokemonImage, type:pokemonType})}>
                <Text style={styles.text}>{name}</Text>
                {
                    pokemonImage ?
                        (<Image
                            style={styles.image}
                            source={{uri : pokemonImage}}
                        />)
                        : (<Image
                            style={styles.image}
                            source={baseImage}
                        />)
                }
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#45D45D',
        marginBottom: 25,
        padding: 15,
        borderRadius: 10,
    },

    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'capitalize'

    },

    image : {
        width: 170,
        height: 170
    }
});
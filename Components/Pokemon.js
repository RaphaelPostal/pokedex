import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from "react-native";
import baseImage from '../assets/pokeball.png'
import {getPokemons} from "../Api/pokemon";

export default function Pokemon(props) {

    const { url, name, navigation, ...restProps} = props
    const [pokemonDatas, setPokemonDatas] = useState([])
    const [pokemonImage, setPokemonImage] = useState(null)

    if (pokemonDatas.length === 0) {
        getPokemons(url).then(data => {
           setPokemonImage(data.sprites)
        })
    }

    return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('PokemonScreen', {name: name, url:url})}>
                <Text style={styles.text}>{name}</Text>
                {
                    pokemonImage ?
                        (<Image
                            style={styles.image}
                            source={{uri : pokemonImage.front_default}}
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
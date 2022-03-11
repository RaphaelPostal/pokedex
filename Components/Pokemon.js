import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Image, View} from "react-native";
import baseImage from '../assets/pokeball.png'
import {getPokemons} from "../Api/pokemon";

export default function Pokemon(props) {

    const { url, name, ...restProps} = props
    const [pokemonDatas, setPokemonDatas] = useState([])
    const [pokemonImage, setPokemonImage] = useState(null)

    if (pokemonDatas.length === 0) {
        getPokemons(url).then(data => {
           setPokemonImage(data.sprites)
        })
    }

    return (
            <View style={styles.container}>
                <Text>{name}</Text>
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

            </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#45D45D',
        marginBottom: 25,
        color: 'white',
        padding: 10
    },
    text : {
        backgroundColor: '#45D45D',
        marginBottom: 25,
        color: 'white',
        padding: 10
    },

    image : {
        width: 100,
        height: 100
    }
});
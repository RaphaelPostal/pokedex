import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from "react-native";
import baseImage from '../assets/pokeball.png'
import {getPokemons} from "../Api/pokemon";

export default function Pokemon(props) {

    const { url, name, type, navigation, image, ...restProps} = props
    const [pokemonImage, setPokemonImage] = useState(null)
    const [pokemonType, setPokemonType] = useState(null)

    useEffect(() => {
        if (url !== null && url !== undefined) {
            getPokemons(url).then(data => {
                setPokemonImage(data.sprites.other['official-artwork'].front_default)
                setPokemonType(data.types[0].type.name)
            })
        } else { //on utilise les props passées depuis la recherche
            setPokemonImage(image)
            setPokemonType(type)
        }
    }, [])

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
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
    },

    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'capitalize'

    },

    image : {
        width: 80,
        height: 80
    }
});
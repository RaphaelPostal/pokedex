import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image, Button, TouchableOpacity} from 'react-native';
import {AsyncStorage} from "react-native";

export default function PokemonDetails({route}) {

    const {name, url, image, type, measurements} = route.params

    const [typeColor, setTypeColor] = useState(null)
    const [myTeam, setMyTeam] = useState(null)

    const addPokemonInTeam = () => {

        let pokemonSelected = {
            name: name,
            url: url
        }

        AsyncStorage.getItem('team').then(value => {
            let team = JSON.parse(value)
            if (team.length < 6) {
                if (!team.find(pokemon => pokemon.name === pokemonSelected.name)) {
                    team.push(pokemonSelected)
                    AsyncStorage.setItem('team', JSON.stringify(team))
                }
            } else {
                alert('Votre team est pleine !')
            }

            setMyTeam(team)
        })

    }

    const removePokemonInTeam = () => {

        let pokemonSelected = {
            name: name,
            url: url
        }

        AsyncStorage.getItem('team').then(value => {
            let team = JSON.parse(value)
            let pokemonToRemove = team.find(pokemon => pokemon.name === pokemonSelected.name)
            team.splice(team.indexOf(pokemonToRemove), 1)
            AsyncStorage.setItem('team', JSON.stringify(team))
            setMyTeam(team)

        })

    }

    useEffect(() => {

        AsyncStorage.getItem('team', (err, result) => {
            if(result === null) {
                let team = []
                AsyncStorage.setItem('team', JSON.stringify([]));
                setMyTeam(team)
            } else {
                AsyncStorage.getItem('team').then(value => {
                    setMyTeam(JSON.parse(value))
                })
            }

        })

        switch (type) {
            case 'normal':
                setTypeColor('#A8A77A')
                break;
            case 'fighting':
                setTypeColor('#C22E28')
                break;
            case 'flying':  //#A98FF3
                setTypeColor('#A98FF3')
                break;
            case 'poison':
                setTypeColor('#A33EA1')
                break;
            case 'ground':  //#E2BF65
                setTypeColor('#E2BF65')
                break;
            case 'rock':
                setTypeColor('#B6A136')
                break;
            case 'bug':
                setTypeColor('#A6B91A')
                break;
            case 'ghost':
                setTypeColor('#735797')
                break;
            case 'steel':
                setTypeColor('#B7B7CE')
                break;
            case 'fire':
                setTypeColor('#EE8130')
                break;
            case 'water':
                setTypeColor('#6390F0')
                break;
            case 'grass':
                setTypeColor('#7AC74C')
                break;
            case 'electric':
                setTypeColor('#F7D02C')
                break;
            case 'psychic':
                setTypeColor('#F95587')
                break;
            case 'ice':
                setTypeColor('#96D9D6')
                break;
            case 'dragon':
                setTypeColor('#6F35FC')
                break;
            case 'dark':
                setTypeColor('#705746')
                break;
            case 'fairy':
                setTypeColor('#D685AD')
                break;
            case 'unknown':
                setTypeColor('#000000')
                break;
        }

    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Image
                style={styles.image}
                source={{uri : image}}
            />
            <View style={ {backgroundColor: typeColor, marginTop : 20, marginBottom: 20, padding : 10, borderRadius: 10 } }>
                <Text style={styles.type}>{type}</Text>
            </View>
            <Text style={styles.measurements}>Taille : {measurements.height}</Text>
            <Text style={styles.measurements}>Poids : {measurements.weight}</Text>

            {
                myTeam !== null && myTeam.find(pokemon => pokemon.name === name) ?
                    <TouchableOpacity onPress={removePokemonInTeam} style={styles.buttonRemove}>
                        <Text style={styles.textButton}>Retirer de ma team</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={addPokemonInTeam} style={styles.buttonAdd}>
                        <Text style={styles.textButton}>Ajouter à ma team</Text>
                    </TouchableOpacity>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    title: {
        marginTop: 30,
        fontSize: 40,
        textTransform: 'capitalize',
        textAlign: 'center'

    },

    image: {
        width: 200,
        height: 200
    },

    type : {
        fontSize: 20,
        textTransform: 'capitalize',
        color: 'white'
    },

    measurements : {
        fontSize: 20,
        fontWeight: 'bold',
    },

    buttonRemove : {
        backgroundColor: "#FF3359",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },

    buttonAdd : {
        backgroundColor: "#45D45D",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },

    textButton : {
        fontSize: 15,
        color: 'white',
    }
});

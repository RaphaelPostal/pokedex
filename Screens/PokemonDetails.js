import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image, Button} from 'react-native';
import {AsyncStorage} from "react-native";

export default function PokemonDetails({route}) {

    const {name, url, image, type} = route.params

    const [typeColor, setTypeColor] = useState(null)
    const [team, setTeam] = useState(null)


    const addPokemonInTeam = () => {

        let newPokemon = {
            name: name,
            url: url,
            image: image,
            type: type,
            typeColor: typeColor
        }

        AsyncStorage.getItem('team').then(value => {
            let team = JSON.parse(value)
            if (team.length < 6) {
                if (team.find(pokemon => pokemon.name === newPokemon.name)) {
                    alert('Vous avec déjà ce pokemon dans votre team ...')
                } else {
                    team.push(newPokemon)
                    AsyncStorage.setItem('team', JSON.stringify(team), () => {
                        console.log(team)
                    })
                    alert('Pokémon ajouté !')
                }
            } else {
                alert('Votre team est pleine !')
            }

        })

    }

    const removePokemonInTeam = () => {

        let newPokemon = {
            name: name,
            url: url,
            image: image,
            type: type,
            typeColor: typeColor
        }

        AsyncStorage.getItem('team').then(value => {
            let team = JSON.parse(value)
            let pokemonToRemove = team.find(pokemon => pokemon.name === newPokemon.name)
            team.splice(team.indexOf(pokemonToRemove), 1)
            AsyncStorage.setItem('team', JSON.stringify(team), () => {
                console.log(team)
            })

        })

    }

    useEffect(() => {

        AsyncStorage.getItem('team', (err, result) => {
            if(result === null) {
                let team = []
                AsyncStorage.setItem('team', JSON.stringify([]));
                setTeam(team)
            } else {
                AsyncStorage.getItem('team').then(value => {
                    setTeam(JSON.parse(value))
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
            {
                team !== null && team.find(pokemon => pokemon.name === name) ?
                    <Button onPress={removePokemonInTeam} title="Retirer de ma team" color="#FF3359"/>
                    :
                    <Button onPress={addPokemonInTeam} title="Ajouter à ma team" color="#45D45D"/>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    text: {
        backgroundColor: '#45D45D',
        marginBottom: 25,
        color: 'white',
        padding: 10,
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

    addButton : {
        marginTop: 50,
        backgroundColor: '#45D45D',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        width: 200
    }
});

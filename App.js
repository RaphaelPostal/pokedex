import { StatusBar } from 'expo-status-bar';
import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import CustomButton from './Components/CustomButton';
import {getPokemons} from "./Api/pokemon";

export default function App() {

    const [newText, setNewText] = useState('bouton');

    const displayColor = (color) => {
        console.log(color)
    }

    async function getAllPokemons() {
        let pokemons = await getPokemons();
        console.log(pokemons)
    }

    useEffect(() => {
        getAllPokemons();
    })

    return (
        <View style={styles.container}>
            <Text>La super app</Text>
            <StatusBar style="auto" />
            <CustomButton color={"red"} text={newText} setNewText={setNewText} consoleColor={displayColor}/>
            <CustomButton color={"green"} text={newText} setNewText={setNewText} consoleColor={displayColor}/>
            <CustomButton color={"blue"} text={newText} setNewText={setNewText} consoleColor={displayColor}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
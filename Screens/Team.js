import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ActivityIndicator, AsyncStorage} from 'react-native';
import { FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Pokemon from "../Components/Pokemon"

export default function Team({navigation}) {
    const [myTeam, setMyTeam] = useState([]);
    const isFocused = useIsFocused();

    const renderPokemon = ({item}) => (
        <Pokemon name={item.name} url={item.url} image={item.image} type={item.type} navigation={navigation} />
    )

    const loadMyTeam = () => {
        AsyncStorage.getItem('team', (err, result) => {
            if(result === null) {
                let team = []
                AsyncStorage.setItem('team', JSON.stringify([]));
            } else {
                AsyncStorage.getItem('team').then(value => {
                    setMyTeam(JSON.parse(value))
                })
            }
        })
    }

    useEffect(() => {
        if (isFocused) {
            loadMyTeam();
        }
    }, [isFocused])


    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <FlatList
                data={myTeam}
                renderItem={renderPokemon}
                keyExtractor={item => item.name}
            />

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

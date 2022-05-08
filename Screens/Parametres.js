import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import CustomSwitch from '../Components/CustomSwitch';
import SelectDropdown from 'react-native-select-dropdown';

export default function Parametres({navigation}) {

    const arenas = ["Argenta", "Azuria", "Carmin sur Mer", "Céladopole", "Parmanie", "Safrania", "Cramois'Île", "Jadielle"]

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.paramLine}>
                <Text style={styles.paramLineText}>Pseudo</Text>
                <TextInput style={{borderBottomWidth: 1, borderBottomColor: '#45D45D', width: '70%', fontSize: 18}}/>
            </View>
            <View style={styles.paramLine}>
                <Text style={styles.paramLineText}>Profil visible par tous</Text>
                <CustomSwitch />
            </View>
            <View style={styles.paramLine}>
                <Text style={styles.paramLineText}>Activer l'échange de pokémon</Text>
                <CustomSwitch />
            </View>
            <View style={styles.paramLine}>
                <Text style={{fontSize: 18}}>Arène préférée</Text>
                <SelectDropdown
                    buttonStyle={{bottom: 10, backgroundColor: '#DDDDDD', borderRadius: 10}}
                    data={arenas}
                    defaultButtonText="Choisissez l'arène"
                    onSelect={(selectedItem, index) => {
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        alignItems: 'center',
    },

    paramLine: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    paramLineText: {
        fontSize: 18,
    }
});

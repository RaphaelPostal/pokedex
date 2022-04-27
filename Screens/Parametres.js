import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

export default function Parametres({navigation}) {

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text>Paramètres</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

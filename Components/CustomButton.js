import { StyleSheet, Button } from 'react-native';
import React, {useState} from "react";

export default function CustomButton({color, text, consoleColor, setNewText}) {

    return (
        <Button
            onPress={() => {consoleColor(color); setNewText(color)}}
            title={text}
            color={color}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
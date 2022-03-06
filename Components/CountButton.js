import {StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

export default function CountButton({number, setNumber}) {

    return (
      <Button
        onPress={ () => {setNumber(number + 1)} }
        title = {number.toString()}
      />
    );
}

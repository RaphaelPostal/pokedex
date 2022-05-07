import {StyleSheet, Button, Switch} from 'react-native';
import React, {useState} from "react";

export default function CustomSwitch() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Switch
            trackColor={{ false: "#C2C2C2", true: "#99e699" }}
            thumbColor={isEnabled ? "#45D45D" : "#999999"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], bottom: 10, marginLeft: 10 }}
        />
    );
}
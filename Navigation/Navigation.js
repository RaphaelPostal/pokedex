import Home from '../Screens/Home';
import PokemonDetails from '../Screens/PokemonDetails';
import React, { useEffect, useState } from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function PokemonStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Home}/>
            <Stack.Screen name="PokemonScreen" component={PokemonDetails}/>
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{
                    title: "Pokedex",
                    headerTintColor: "white",
                    headerStyle:
                        {backgroundColor: '#45D45D'}
                }} name="Home" component={PokemonStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
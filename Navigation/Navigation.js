import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Team from '../Screens/Team';
import PokemonDetails from '../Screens/PokemonDetails';
import React, { useEffect, useState } from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createStackNavigator} from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function PokemonStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Le pokédex" component={Home}/>
            <Stack.Screen name="Détails" component={PokemonDetails}/>
        </Stack.Navigator>
    )
}

function SearchStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Rechercher un pokémon" component={Search}/>
            <Stack.Screen name="Détails" component={PokemonDetails}/>
        </Stack.Navigator>
    )
}

function TeamStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Équipe" component={Team}/>
            <Stack.Screen name="Détails" component={PokemonDetails}/>
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{
                    title: "Pokédex",
                    headerTintColor: "white",
                    headerStyle:
                        {backgroundColor: '#45D45D'},
                    tabBarIcon: ({}) => {return <Ionicons name={'home'} size={24} color={'black'}/>}
                }} name="Home" component={PokemonStack} />

                <Tab.Screen options={{
                    title: "Recherche",
                    headerTintColor: "white",
                    headerStyle:
                        {backgroundColor: '#45D45D'},
                    tabBarIcon: ({}) => {return <Ionicons name={'search'} size={24} color={'black'}/>}

                }} name="Recherche" component={SearchStack}/>

                <Tab.Screen options={{
                    title: "Team",
                    headerTintColor: "white",
                    headerStyle:
                        {backgroundColor: '#45D45D'},
                    tabBarIcon: ({}) => {return <Ionicons name={'people'} size={24} color={'black'}/>}

                }} name="Team" component={TeamStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
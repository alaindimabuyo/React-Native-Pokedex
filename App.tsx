import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from "./components/HomeScreen"
import DetailsScreen from "./components/DetailsScreen"
import PokemonState from "./context/PokemonState"

export default function App() {
  const Stack = createStackNavigator();

  return (
    <PokemonState>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Pokedex' }}></Stack.Screen>
          <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PokemonState>
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

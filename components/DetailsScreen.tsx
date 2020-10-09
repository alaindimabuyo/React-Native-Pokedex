import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import PokemonContext from '../context/PokemonContext'

const DetailsScreen = ({ route }: any) => {
    const pokemonContext = useContext(PokemonContext);

    const pokemon = pokemonContext?.pokemon
    const loading = pokemonContext?.loading
    console.log(pokemon.abilities)
    React.useEffect(() => {
        pokemonContext?.getCurrentPokemon(route.params.itemId);

        // eslint-disable-next-line
    }, []);
    if (loading) {
        return <ActivityIndicator />
    }
    const abilities = pokemon.abilities.map((item: any) => item.ability.name)
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={styles.tinyLogo} source={{
                uri: `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`
            }} />
            <Text style={styles.title}>{pokemon.name}</Text>
            <Text style={styles.ability}>Abilities: {abilities.join(', ')}</Text>
        </View>


    )
}

const styles = StyleSheet.create({

    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        flex: 1,
        margin: 5,
        minWidth: 85,
        maxWidth: 85,
        height: 85,
        maxHeight: 304,

    },
    title: {
        fontSize: 40,
    },
    ability: {
        fontSize: 15,
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
});

export default DetailsScreen

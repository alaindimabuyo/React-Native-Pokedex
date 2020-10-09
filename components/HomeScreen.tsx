import React, { useContext, useEffect } from 'react'
import { View, Text, Button, StyleSheet, StatusBar, FlatList, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native'
import PokemonContext from '../context/PokemonContext'
import Card from "../shared/card"
import { Link } from '@react-navigation/native';



export const HomeScreen = ({ navigation }: any) => {
    const pokemonContext = useContext(PokemonContext)
    const pokemons = pokemonContext?.pokemons
    const [selectedId, setSelectedId] = React.useState(null);
    const [search, setSearch] = React.useState("");
    useEffect(() => {
        pokemonContext?.getPokemon()
    }, [])



    //filter search
    const filteredPokemon = pokemons.filter((pokemon: any) => {
        return pokemon.pokemon_species.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    const Item = ({ pokemon, onPress }: any) => {

        return (


            <TouchableOpacity
                onPress={onPress}
            >
                <View style={styles.item}>
                    <Image style={styles.tinyLogo} source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                            pokemon.entry_number
                            }.png`
                    }} />
                    <Text style={styles.title}>{pokemon.pokemon_species.name}</Text>

                </View>
            </TouchableOpacity>




        )
    }

    const renderItem = ({ item }: any) => {

        return (

            <Item pokemon={item} onPress={() => navigation.navigate(`Details`, {
                itemId: item.entry_number,
                otherParam: 'anything you want here',
            })} />

        )
    }
    const SearchOnChange = (e: any) => {
        setSearch(e);
    };
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
                onChangeText={SearchOnChange}

            />
            <FlatList data={filteredPokemon} renderItem={renderItem} keyExtractor={item => String(item.entry_number)} numColumns={4}></FlatList>

            <Button title="Go to Details" onPress={() => navigation.navigate('Details')}></Button>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
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
        fontSize: 12,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

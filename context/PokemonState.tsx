import React, { useReducer } from 'react'

import PokemonContext from "./PokemonContext"
import PokemonReducer from "./PokemonReducer"
import axios from 'axios'

import {
    GET_POKEMON,
    GET_CURRENT_POKEMON,
    CLEAR_STATE,
    GET_ITEMS,
    SET_LOADING,
    GET_CURRENT_ITEM,
    CLEAR_ITEM
} from "./types";

const PokemonState = (props: any) => {
    const initialState = {
        pokemon: {},
        pokemons: [],
        items: [],
        item: {},
        loading: false
    }

    const [state, dispatcn] = useReducer(PokemonReducer, initialState);

    const clearState = () => {
        dispatcn({ type: CLEAR_STATE })
    }

    const clearItem = () => {
        dispatcn({ type: CLEAR_ITEM })
    }

    const setLoading = () => {
        dispatcn({ type: SET_LOADING })
    }

    const getItems = async () => {
        setLoading()
        const res = await axios.get("https://pokeapi.co/api/v2/item?offset=0&limit=960");

        dispatcn({ type: GET_ITEMS, payload: res.data.results });
    }

    const getPokemon = async () => {
        setLoading();
        const res = await axios.get("https://pokeapi.co/api/v2/pokedex/1/");

        dispatcn({ type: GET_POKEMON, payload: res.data.pokemon_entries });
    };

    const getCurrentPokemon = async (id: any) => {
        setLoading();
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        dispatcn({ type: GET_CURRENT_POKEMON, payload: res.data });
    };

    const getCurrentItem = async (id: any) => {
        setLoading();
        const res = await axios.get(`https://pokeapi.co/api/v2/item/${id}`);

        dispatcn({ type: GET_CURRENT_ITEM, payload: res.data });
    };

    return (
        <PokemonContext.Provider
            value={{
                getPokemon,
                getCurrentPokemon,
                getCurrentItem,
                getItems,
                pokemons: state.pokemons,
                pokemon: state.pokemon,
                items: state.items,
                item: state.item,
                clearState,
                clearItem,
                loading: state.loading
            }}
        >
            {props.children}
        </PokemonContext.Provider>
    );
}

export default PokemonState
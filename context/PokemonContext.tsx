import { createContext } from "react";


interface IContextProps {
    getCurrentPokemon: (id: any) => void,
    getPokemon: () => void,
    getCurrentItem: (id: any) => void,
    getItems: (id: any) => void,
    pokemons: any
    pokemon: any
    items: any
    item: any
    clearState: (id: any) => void,
    clearItem: (id: any) => void,
    loading: boolean

}

const PokemonContext = createContext<IContextProps | null>(null);

export default PokemonContext;
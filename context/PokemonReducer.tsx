import { GET_POKEMON, GET_ITEMS, GET_CURRENT_ITEM, GET_CURRENT_POKEMON, SET_LOADING, CLEAR_ITEM, CLEAR_STATE } from './types'

export default (state: any, action: any) => {
    switch (action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemons: action.payload,
                loading: false
            }
        case GET_CURRENT_POKEMON:
            return {
                ...state,
                pokemon: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return false;
    }
}

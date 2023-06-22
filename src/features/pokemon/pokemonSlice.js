import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: {
        data: [],
        
    },

    reducers: {
        initPokemons: (state, action) => {
            console.log(action);
           state.data = action.payload

        }
    }
})

// this is for dispatch
export const { initPokemons } = pokemonSlice.actions

// this is for configureStore
export default pokemonSlice.reducer
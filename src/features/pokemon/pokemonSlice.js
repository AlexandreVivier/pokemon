import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: { data: [] },

  reducers: {
    initPokemons: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { initPokemons, addPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer

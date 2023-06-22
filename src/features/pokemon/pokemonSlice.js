import { createSlice, createSelector } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: { data: [], pokemonsDetail: [] },

  reducers: {
    initPokemons: (state, action) => {
      state.data = action.payload
    },
    addPokemon: (state, action) => {
      state.pokemonsDetail.push(action.payload)
    }
  }
})

export const getPokemon = createSelector((state) => state)

export const { initPokemons, addPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer
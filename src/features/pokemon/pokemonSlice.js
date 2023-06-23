import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: { data: [], team: [] },

  reducers: {
    initPokemons: (state, action) => {
      state.data = action.payload
    },
    addPokemonToTeam: (state, action) => {
      state.team.push(action.payload)
    },
    removePokemonToTeam: (state, action) => {
      state.team = state.team.filter(team => team.id !== action.payload)
    }
  }
})

export const { initPokemons, addPokemonToTeam, removePokemonToTeam } = pokemonSlice.actions
export default pokemonSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './features/pokemon/pokemonSlice'

export default configureStore({
  reducer: {
    pokemons: pokemonSlice
  },
})

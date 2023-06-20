import { useState, useEffect } from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'

function PokemonList() {
  const pokemonsUrl = Array.from({ length: 151 }, (v, k) => 'https://pokeapi.co/api/v2/pokemon/' + (k + 1))
  const [pokemons, setPokemons] = useState([])
  const fetchData = async (url) => await fetch(url).then(response => response.json())

  useEffect(() => {
    const pokemonsPromise = pokemonsUrl.map((url) => fetchData(url))
    Promise.all(pokemonsPromise).then((values) => {
      setPokemons(values)
    })
  }, [])

  return (
    <>
      {pokemons &&
        pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemonImg={pokemon.sprites.other.dream_world.front_default} pokemonName={pokemon.name} pokemonTypes={pokemon.types} />
        ))
      }
    </>
  )
}

export default PokemonList
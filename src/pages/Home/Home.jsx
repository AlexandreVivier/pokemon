import { useState, useEffect } from 'react'
import './Home.css'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

function Home() {
  const pokemonsUrl = Array.from({ length: 151 }, (v, k) => 'https://pokeapi.co/api/v2/pokemon/' + (k + 1))
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const pokemonsPromise = pokemonsUrl.map((url) => fetchData(url))

    Promise.all(pokemonsPromise).then((values) => {
      setPokemons(values)
    })
  }, [])

  const fetchData = async (url) => await fetch(url).then(response => response.json())

  return (
    <div className="homeContainer">
      <div className="container">
        {pokemons &&
          pokemons.map(pokemon => (
            <PokemonCard key={pokemon.name} pokemonImg={pokemon.sprites.other.dream_world.front_default} pokemonName={pokemon.name} pokemonTypes={pokemon.types} />

          ))
        }
      </div>
    </div>
  )
}

export default Home
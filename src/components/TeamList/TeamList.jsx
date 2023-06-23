import { useSelector } from 'react-redux'

// Component
import PokemonCard from '../PokemonCard/PokemonCard'

// CSS
import './TeamList.css'

function MyPokedex() {
  const pokemonsTeam = useSelector((state) => state.pokemons.team)

  return (
    <>
      <div className='TeamListContainer'>
        <div className="titleTeam">
          <h2>MY TEAM !</h2>
        </div>
        <div className='PokemonTeamList'>
          { pokemonsTeam.map((pokemon) =>
            <PokemonCard key={pokemon.name} pokemonImg={pokemon.sprites.other.dream_world.front_default} pokemonName={pokemon.name} pokemonTypes={pokemon.types} pokemonId={pokemon.id} />)
          }
        </div>
      </div>
    </>
  )
}

export default MyPokedex
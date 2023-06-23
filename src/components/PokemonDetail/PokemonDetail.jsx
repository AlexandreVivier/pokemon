import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addPokemonToTeam, removePokemonToTeam } from '../../features/pokemon/pokemonSlice'
import _ from 'lodash'

// Component
import PokemonIcon from '../PokemonCard/PokemonIcon'

// CSS
import './PokemonDetail.css'

function PokemonDetail() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemons.data)
  const pokemonsTeam = useSelector(state => state.pokemons.team)
  const pokemon = _.find(pokemons, { id: _.toNumber(slug) })

  const addTeam = () => {
    dispatch(addPokemonToTeam(pokemon))
  }
  const removeTeam = () => {
    dispatch(removePokemonToTeam(pokemon.id))
  }

  return (
    <div className="containerDetail">
      <div className="cardContainer">
        <div className="leftCard">
          <div className="pokemonName">
            <h1 className="pkmnName text">{pokemon && pokemon?.name}</h1>
            <h2 className="pkmnNumber text">N°{pokemon && pokemon?.id}</h2>
          </div>
          <div className='imgContainer'>
            <img src={pokemon && pokemon.sprites.other.dream_world.front_default} alt={pokemon && pokemon?.name} className="image" />
            <img src={pokemon && pokemon.sprites.other.dream_world.front_default} alt={pokemon && pokemon?.name} className="image imageShadow" />
          </div>
        </div>
        <div className="rightCard">
          <div className="titleDetails">
            <h2>Details :</h2>
          </div>
          <div className="infos">
            <h3 className="pkmnHeight text">height : {pokemon && pokemon?.height} Ft</h3>
            <h3 className="pkmnWeight text">weight  : {pokemon && pokemon?.weight} Lbs</h3>
            <div className="typesDetail">
              <div className='containerWidth type'>
                <h3>type</h3>
              </div>
              {pokemon && pokemon.types.map((type) => <PokemonIcon key={type.type.name} type={type.type.name} className="detailsType"/>)}
            </div>
            <div className='containerWidth'>
              <h3 className="pkmnHP text">{pokemon && pokemon?.stats[0].base_stat}{pokemon && pokemon?.stats[0].stat.name}</h3>
            </div>
            <div className="attack">
              {pokemon && pokemon.moves.slice(0, 4).map((move) => <p className="pkmnMove text" key={move.move.name}>{move.move.name}</p>)}
            </div>
          </div>
          {pokemonsTeam.includes(pokemon) ? (
            <button onClick={removeTeam} className="removeButton">Remove from team !</button>
          ) : (
            <button onClick={addTeam} className="addButton">Add to team !</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
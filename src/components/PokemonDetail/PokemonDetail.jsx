import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import PokemonIcon from '../PokemonCard/PokemonIcon'
import "./PokemonDetail.css"

function PokemonDetail() {
    const { slug } = useParams()
    const pokemons = useSelector(state => state.pokemons.data)
    const pokemon = _.find(pokemons, { id: _.toNumber(slug) })

    return (
        <div className="containerDetail">
            <div className="cardContainer">
                <div className="leftCard">
                    <div className="pokemonname">
                        <h1 className="pkmnName text">{pokemon && pokemon?.name}</h1>
                        <h2 className="pkmnNumber text">N°{pokemon && pokemon?.id}</h2>
                    </div>
                    <div className='imgContainer'>

                        <img src={pokemon && pokemon.sprites.other.dream_world.front_default} alt={pokemon && pokemon?.name} className="image" />

                        <img src={pokemon && pokemon.sprites.other.dream_world.front_default} alt={pokemon && pokemon?.name} className="image imageShadow" />
                    </div>
                </div>
                <div className="rightCard">
                    <div className="types">
                        {pokemon && pokemon.types.map((type) =>
                            <PokemonIcon key={type.type.name} type={type.type.name} />
                        )}</div>

                    <h3 className="pkmnHeight text">Taille : {pokemon && pokemon?.height} Ft</h3>
                    <h3 className="pkmnWeight text">Poids : {pokemon && pokemon?.weight} Lbs</h3>

                    <p className="pkmnHP text">{pokemon && pokemon?.stats[0].base_stat}{pokemon && pokemon?.stats[0].stat.name}</p>
                    {/* {pokemon && pokemon.moves.map((move) =>
                            <p className="pkmnMove text" key={move.move.name}>{move.move.name}</p>)} */}

                </div>
            </div>
            {/* <div>{pokemon}</div> */}
        </div>
    )
}

export default PokemonDetail
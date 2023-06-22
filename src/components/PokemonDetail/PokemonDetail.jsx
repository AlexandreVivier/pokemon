import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { addPokemon, getPokemon } from '../../features/pokemon/pokemonSlice'
import PokemonIcon from '../PokemonCard/PokemonIcon'
import "./PokemonDetail.css"

function PokemonDetail() {
    const { slug } = useParams()
    const dispatch = useDispatch()
    const state = useSelector((state) => state.pokemons.pokemonsDetail)
    const toto = getPokemon(state)
    console.log(toto)
    const [pokemon, setPokemon] = useState(useSelector((state) => _.find(state.pokemons.pokemonsDetail, { id: slug })))

    // Get Pokemon
    useEffect(() => {

        if (!pokemon) {
            fetch('https://pokeapi.co/api/v2/pokemon/' + slug)
                .then(response => response.json())
                .then(data => {
                    let { name, types, id, stats, moves, sprites, height, weight } = data
                    const pokemonObject = {
                        name,
                        types,
                        id,
                        height,
                        weight,
                        moves,
                        hp: stats[0].base_stat,
                        attack: stats[1].base_stat,
                        defense: stats[2].base_stat,
                        special_attack: stats[3].base_stat,
                        special_defense: stats[4].base_stat,
                        speed: stats[5].base_stat,
                        images: sprites.other.dream_world.front_default
                    }
                    dispatch(addPokemon(pokemonObject))
                    setPokemon(pokemonObject)

                })
        }
    }, [])

    return (
        <div className="containerDetail">
            <div className="cardContainer">
                <div className="leftCard">
                    <img src={pokemon && pokemon?.images} alt={pokemon && pokemon?.name} />
                </div>
                <div className="rightCard">
                    <h1 className="pkmnName text">{pokemon && pokemon?.name}</h1>
                    <h2 className="pkmnNumber text">N°{pokemon && pokemon?.id}</h2>
                    {pokemon.types.map((type) =>
                        <PokemonIcon key={type.type.name} type={type.type.name} />
                    )}
                    <h3 className="pkmnHeight text">{pokemon && pokemon?.height}</h3>
                    <h3 className="pkmnWeight text">{pokemon && pokemon?.weight}</h3>
                    <ul>
                        {pokemon.moves.map((move) =>
                            <li className="pkmnMove text" key={move}>{move.move.name}</li>)}
                    </ul>
                </div>
            </div>
            {/* <div>{pokemon}</div> */}
        </div>
    )
}

export default PokemonDetail
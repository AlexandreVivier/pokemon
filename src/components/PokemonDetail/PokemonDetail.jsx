import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
function PokemonDetail() {
    const { slug } = useParams()
    const [pokemon, setPokemon] = useState('')

    // Get Pokemon
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + slug)
            .then(response => response.json())
            .then(data => setPokemon(data.name))
    }, [])

    return (
        <div>{pokemon}</div>
    )
}

export default PokemonDetail
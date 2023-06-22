import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import './PokemonList.css'
import PokemonCard from '../PokemonCard/PokemonCard'
import { useDispatch, useSelector } from 'react-redux'
import { initPokemons } from '../../features/pokemon/pokemonSlice'

function Paginate() {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemons.data)

  const pokemonsUrl = Array.from({ length: 151 }, (v, k) => 'https://pokeapi.co/api/v2/pokemon/' + (k + 1))
  const [currentPage, setCurrentPage] = useState(0)
  const PER_PAGE = 18
  const offset = currentPage * PER_PAGE;
  const currentPageData = pokemons
    .slice(offset, offset + PER_PAGE)
    .map((pokemon) => <PokemonCard key={pokemon.name} pokemonImg={pokemon.sprites.other.dream_world.front_default} pokemonName={pokemon.name} pokemonTypes={pokemon.types} pokemonId={pokemon.id} />)
  const pageCount = Math.ceil(pokemons.length / PER_PAGE)

  // Get PokemonList
  const fetchData = async (url) => await fetch(url).then(response => response.json())
  useEffect(() => {
    const pokemonsPromise = pokemonsUrl.map((url) => fetchData(url))
    Promise.all(pokemonsPromise).then((values) => {
      dispatch(initPokemons(values))
    })
  }, [])

  // Change page
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage)
  }

  return (
    <>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}

        containerClassName={"pagination"}
        previousLinkClassName={"previous"}
        nextLinkClassName={"next"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      {currentPageData}
    </>
  )
}

export default Paginate
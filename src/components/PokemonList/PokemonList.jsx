import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'

// Component
import PokemonCard from '../PokemonCard/PokemonCard'

// CSS
import './PokemonList.css'

function Paginate() {
  const pokemons = useSelector((state) => state.pokemons.data)
  const [currentPage, setCurrentPage] = useState(0)
  const PER_PAGE = 18
  const offset = currentPage * PER_PAGE;
  const currentPageData = pokemons
    .slice(offset, offset + PER_PAGE)
    .map((pokemon) => <PokemonCard key={pokemon.name} pokemonImg={pokemon.sprites.other.dream_world.front_default} pokemonName={pokemon.name} pokemonTypes={pokemon.types} pokemonId={pokemon.id} />)
  const pageCount = Math.ceil(pokemons.length / PER_PAGE)

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
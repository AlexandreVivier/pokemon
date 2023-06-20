import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import PokemonList from '../PokemonList/PokemonList'

// eslint-disable-next-line react/prop-types
function Paginate({ itemsPerPage }) {

  const pokemonsUrl = Array.from({ length: 151 }, (v, k) => 'https://pokeapi.co/api/v2/pokemon/' + (k + 1))
  const [pokemons, setPokemons] = useState([])
  const fetchData = async (url) => await fetch(url).then(response => response.json())

  useEffect(() => {
    const pokemonsPromise = pokemonsUrl.map((url) => fetchData(url))
    Promise.all(pokemonsPromise).then((values) => {
      setPokemons(values)
    })
  }, [])

  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  const currentItems = pokemons.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(pokemons.length / itemsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % pokemons.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <PokemonList pokemons={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  )
}




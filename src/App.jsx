import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import { Provider } from 'react-redux'
import store from './store'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { initPokemons } from './features/pokemon/pokemonSlice'


function App() {
  const dispatch = useDispatch()
  const pokemonsUrl = Array.from({ length: 151 }, (v, k) => 'https://pokeapi.co/api/v2/pokemon/' + (k + 1))
  const fetchData = async (url) => await fetch(url).then(response => response.json())

  useEffect(() => {
    const pokemonsPromise = pokemonsUrl.map((url) => fetchData(url))
    Promise.all(pokemonsPromise).then((values) => {
      dispatch(initPokemons(values))
    })
  }, [])

  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:slug" element={<Detail />} />
      </Routes >
    </Provider>
  )
}

export default App

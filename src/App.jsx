import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Provider,useDispatch } from 'react-redux'

// Store
import store from './store'
import { initPokemons } from './features/pokemon/pokemonSlice'

// Pages
import Team from './pages/Team/Team'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'

// Component
import Header from './components/Header/Header'

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
        <Route path="/team" element={<Team />} />
        <Route path="/pokemon/:slug" element={<Detail />} />
      </Routes >
    </Provider>
  )
}

export default App

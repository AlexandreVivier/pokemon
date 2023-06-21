import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import PokemonDetail from './components/PokemonDetail/PokemonDetail'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons/:slug" element={<PokemonDetail />} />
      </Routes >
    </>
  )
}

export default App

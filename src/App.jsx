import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import PokemonDetail from './components/PokemonDetail/PokemonDetail'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:slug" element={<PokemonDetail />} />
      </Routes >
    </Provider>
  )
}

export default App

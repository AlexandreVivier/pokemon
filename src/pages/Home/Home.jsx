// Component
import PokemonList from '../../components/PokemonList/PokemonList'

// CSS
import './Home.css'

function Home() {
  return (
    <div className="homeContainer">
      <div className="container">
        <PokemonList />
      </div>
    </div>
  )
}

export default Home
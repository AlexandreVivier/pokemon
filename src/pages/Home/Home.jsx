import './Home.css'
import PokemonList from '../../components/PokemonList/PokemonList'
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
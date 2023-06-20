import "./Header.css"
import PokemonLogo from "../../assets/pokemonLogo.png"

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <div className="logoContainer">
          <img src={PokemonLogo} alt="logo pokemon" />
        </div>
      </div>

    </div>
  )
}

export default Header
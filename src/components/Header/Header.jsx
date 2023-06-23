
import { Link } from 'react-router-dom'

// Assets
import PokemonLogo from "../../assets/pokemonLogo.png"

// CSS
import "./Header.css"

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <div className="logoContainer">
          <img src={PokemonLogo} alt="logo pokemon" />
        </div>
        <Link to={'/'}> <button className="homeButton button">Home</button> </Link>
        <Link to={'/team'}> <button className="teamButton button">My team</button></Link>
    </div>
    </div >
  )
}

export default Header
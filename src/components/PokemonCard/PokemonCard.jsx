import './PokemonCard.css'
import './PokemonType.css'
import PokemonIcon from './PokemonIcon'

// eslint-disable-next-line react/prop-types
function PokemonCard({ pokemonImg, pokemonName, pokemonTypes }) {
  return (
    <>
      <div className="card" key={pokemonName}>
        <div className="cardContent">
          <img src={pokemonImg} alt={pokemonName} />
          <img src={pokemonImg} alt="shadow" className="shadow-pkm" />
          <h3>{pokemonName}</h3>
          <div className="types">
            {/* eslint-disable-next-line react/prop-types  */}
            {pokemonTypes.map((type) =>
              <PokemonIcon key={type.type.name} type={type.type.name} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonCard
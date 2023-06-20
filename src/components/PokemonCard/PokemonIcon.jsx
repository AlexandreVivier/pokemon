import { useState, useEffect } from 'react'
import bug from '../../assets/icons/bug.svg'
import dark from '../../assets/icons/dark.svg'
import dragon from '../../assets/icons/dragon.svg'
import electric from '../../assets/icons/electric.svg'
import fairy from '../../assets/icons/fairy.svg'
import fighting from '../../assets/icons/fighting.svg'
import fire from '../../assets/icons/fire.svg'
import flying from '../../assets/icons/flying.svg'
import ghost from '../../assets/icons/fighting.svg'
import grass from '../../assets/icons/grass.svg'
import ground from '../../assets/icons/ground.svg'
import ice from '../../assets/icons/ice.svg'
import normal from '../../assets/icons/normal.svg'
import poisson from '../../assets/icons/poison.svg'
import psychic from '../../assets/icons/psychic.svg'
import rock from '../../assets/icons/rock.svg'
import steel from '../../assets/icons/steel.svg'
import water from '../../assets/icons/water.svg'

// eslint-disable-next-line react/prop-types
function PokemonIcon({ type }) {
  const [icon, setIcon] = useState(null)

  useEffect(() => {
    switch (type) {
      case 'bug':
        setIcon(bug)
        break;
      case 'dark':
        setIcon(dark)
        break;
      case 'dragon':
        setIcon(dragon)
        break;
      case 'electric':
        setIcon(electric)
        break;
      case 'fairy':
        setIcon(fairy)
        break;
      case 'fighting':
        setIcon(fighting)
        break;
      case 'fire':
        setIcon(fire)
        break;
      case 'flying':
        setIcon(flying)
        break;
      case 'ghost':
        setIcon(ghost)
        break;
      case 'grass':
        setIcon(grass)
        break;
      case 'ground':
        setIcon(ground)
        break;
      case 'ice':
        setIcon(ice)
        break;
      case 'normal':
        setIcon(normal)
        break;
      case 'poisson':
        setIcon(poisson)
        break;
      case 'psychic':
        setIcon(psychic)
        break;
      case 'rock':
        setIcon(rock)
        break;
      case 'steel':
        setIcon(steel)
        break;
      case 'water':
        setIcon(water)
        break;
      default:
        setIcon(bug)
    }
  }, [])

  return (
    <div className={type} >
      <div className="shadow">
      <img src={icon} alt={type} />
      </div>
    </div>
  )
}

export default PokemonIcon
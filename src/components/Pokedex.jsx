// Component
import Pokecard from './Pokecard'

// Style
import './Pokedex.css'

const Pokedex = () => {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-title">Pokedex</h1>
            <Pokecard />
        </div>
    )
}

export default Pokedex
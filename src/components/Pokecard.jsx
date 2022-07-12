// APIs
import { pokemon, imgPokemon } from '../common/pokemonApi'

// Style
import './Pokecard.css'

const Pokecard = () => {
    return (
        pokemon.map(p => {
            return (
                <div className="Pokecard" key={p.id.toString()}>
                    <h2 className="Pokecard-name">
                        {p.name}
                    </h2>
                    <img 
                        className="Pokecard-img" 
                        src={imgPokemon(p.id)} 
                        alt={"Image of " + p.name} 
                    />
                    <div className="Pokecard-info">
                        <p className="Pokecard-info-item">type: {p.type}</p>
                        <p className="Pokecard-info-item">experience: {p.base_experience}</p>
                    </div>
                </div>
            )
        })
    )
}

export default Pokecard
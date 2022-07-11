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
                    <p>Type: {p.type}</p>
                    <p>EXP: {p.base_experience}</p>
                </div>
            )
        })
    )
}

export default Pokecard
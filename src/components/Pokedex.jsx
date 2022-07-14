// Modules
import React, { useState, useEffect } from 'react'

// Component
import Pokecard from './Pokecard'

// Service
import setPokemonDeck from '../services/PokemonService'

// Style
import './Pokedex.css'


export default function Pokedex() {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        // Promise Version
        const pokemonDeck = setPokemonDeck()
        pokemonDeck
        // .then(pokemon => console.log(pokemon))
        .then(p => setPokemon(p))

        // Async / Await Version
        // let a = async () => {
        //     const pokemonDeck = await setPokemonDeck()
        //     setPokemon(pokemonDeck);
        // }
        // a()
    }, [])

    return (
        <div className="Pokedex">
            <h1 className="Pokedex-title">Pokedex</h1>
            {pokemon.length > 0 ? <Pokecard pokemon={pokemon} /> : <></>}
        </div>
    )
}
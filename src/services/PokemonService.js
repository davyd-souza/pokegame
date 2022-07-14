const axios = require('axios')
const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/?limit=151'

const setPokemonDeck = () => {
    return axios.get(pokemonURL)
        .then(res => {
            let deck = res.data.results.sort(() => 0.5 - Math.random()).slice(0, 8)
            for (let i = 0; i < deck.length; i++) {
                deck[i] = axios.get(deck[i].url)
                    .then(res => ({
                        id: res.data.id,
                        name: res.data.name,
                        type: res.data.types[0].type.name,
                        exp: res.data.base_experience,
                        sprite: res.data.sprites.front_default
                    })
                    )
            }
            return Promise.all(deck)
        })
}

// const setPokemonDeck = async () => {
//     return await axios.get(pokemonURL)
//         .then(async (res) => {
//             let deck = res.data.results.sort(() => 0.5 - Math.random()).slice(0, 8)
//             for (let i = 0; i < deck.length; i++) {
//                 deck[i] = await axios.get(deck[i].url)
//                     .then(res => ({
//                         id: res.data.id,
//                         name: res.data.name,
//                         type: res.data.types[0].type.name,
//                         exp: res.data.base_experience,
//                         sprite: res.data.sprites.front_default
//                     })
//                     )
//             }
//             return deck
//         })
// }

export default setPokemonDeck
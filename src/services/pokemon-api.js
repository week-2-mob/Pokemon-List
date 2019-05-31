import QUERY from './Query.js';
const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

const pokemonApi = {
    getPokemon(queryProps) {
        const query = QUERY.stringify(queryProps);
        const url = `${URL}?${query}`;
        return fetch(url)
            .then(response => {
                return response.json();  
            });
           
    }
};

export default pokemonApi;
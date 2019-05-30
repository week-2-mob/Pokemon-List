const URL = 'https://cors-anywhere.herokuapp.com/https://alchemy-pokedex.herokuapp.com/api/pokedex';

const pokemonApi = {
    getPokemon() {
        return fetch(URL)
            .then(response => response.json())
            .then(json => json.results);
    }
};

export default pokemonApi;
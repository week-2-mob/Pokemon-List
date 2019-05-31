import Component from './Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {

    render() {
        const list = this.renderDOM();
        const pokemons = this.props.pokemons;
        pokemons.forEach(pokemon => {
            const pokemonItem = new PokemonItem({ pokemon });
            list.appendChild(pokemonItem.render());
        });

        return list;
    }
    renderTemplate() {
        return /*html*/ `
            <ul class="pokemon-list">
            </ul>
        `;
    }
}

export default PokemonList;
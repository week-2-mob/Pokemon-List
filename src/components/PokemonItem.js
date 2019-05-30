import Component from './Component.js';

class PokemonItem extends Component {

    renderTemplate() {
        const pokemon = this.props.pokemon;


        return /*html*/ `
            <li class="pokemon-item">
                <h3>${pokemon.pokemon}</h3>
                <img src="${pokemon.url_image}">
            </li>
        `;
    }
}

export default PokemonItem;
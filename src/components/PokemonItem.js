import Component from './Component.js';

class PokemonItem extends Component {

    renderTemplate() {
        const pokemon = this.props.pokemon;


        return /*html*/ `
            <li class="pokemon-item" style="background:${pokemon.color_1}; color: ${pokemon.color_2};">
                <h3>${pokemon.pokemon}</h3>
                <img src="${pokemon.url_image}" style="background: ${pokemon.color_f};">
                <h4 class="height">${pokemon.height}</h4>
                <h4 class="weight">${pokemon.weight}</h4>
                <h4 class="attack">${pokemon.attack}</h4>
                <h4 class="defense">${pokemon.defense}</h4>
                <h4 class="special_attack">${pokemon.special_attack}</h4>
                <h4 class="special_defense">${pokemon.special_defense}</h4>
                <h4 class="speed">${pokemon.speed}</h4>
                <h4 class="ability_1">${pokemon.ability_1}</h4>
                <h4 class="ability_hidden">${pokemon.ability_hidden}</h4>
                <h6 class="pokedex"><link url="${pokemon.pokedex}">hey</h6>
            </li>
        `;
    }
}

export default PokemonItem;
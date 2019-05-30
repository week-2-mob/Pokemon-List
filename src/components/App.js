import Component from './Component.js';
import Header from './Header.js';
import PokemonList from './PokemonList.js';
import pokemonApi from '../services/pokemon-api.js';

class App extends Component {
    
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDom = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDom, main);

        const pokemonList = new PokemonList({ pokemons: [] });
        main.appendChild(pokemonList.render());

        pokemonApi.getPokemon()
            .then(pokemons => {
                pokemonList.update({ pokemons });
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                
            });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;
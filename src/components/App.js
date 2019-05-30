import Component from './Component.js';
import Header from './Header.js';
import PokemonList from './PokemonList.js';
import pokemonApi from '../services/pokemon-api.js';
import Loading from './Loading.js';

class App extends Component {
    
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDom = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDom, main);

        const pokemonList = new PokemonList({ pokemons: [] });
        main.appendChild(pokemonList.render());

        const loading = new Loading({ loading: true });
        main.appendChild(loading.render());

        pokemonApi.getPokemon()
            .then(pokemons => {
                pokemonList.update({ pokemons });
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                loading.update({ loading: false });
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
import Component from './Component.js';
import Header from './Header.js';
import PokemonList from './PokemonList.js';
import pokemonApi from '../services/pokemon-api.js';
import Loading from './Loading.js';
import Paging from './Paging.js';
import hashStorage from '../services/hash-storage.js';

class App extends Component {
    
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDom = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDom, main);

        const paging = new Paging({ totalCount: 0 });
        main.appendChild(paging.render());

        const pokemonList = new PokemonList({ pokemons: [] });
        main.appendChild(pokemonList.render());

        const loading = new Loading({ loading: true });
        main.appendChild(loading.render());

        function loadPokemon() {
            const queryProps = hashStorage.get();
            
            loading.update({ loading: true });
            pokemonApi.getPokemon(queryProps)
                .then(response => {
                    pokemonList.update({ pokemons: response.results });
                    const totalCount = response.count;
                    paging.update({ totalCount });
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    loading.update({ loading: false });
                });
        }
        
        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
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
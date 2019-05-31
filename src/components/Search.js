import Component from './Component.js';
import hashStorage from '../services/hash-storage.js';

class Search extends Component {

    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();
            hashStorage.set({ pokemon: input.value, page: 1 });
        });

        function setInputFromHash() {
            const queryProps = hashStorage.get();
            if(!input.value){
                input.value = '';
            } else {
                input.value = queryProps.pokemon;
            }
        }

        setInputFromHash();

        window.addEventListener('hashchange', () => {
            setInputFromHash();
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="search">
                <input name="search" placeholder="Search Pokemons">
                <button class="submit">Search</button>
            </form>
            `;
    }
}

export default Search;
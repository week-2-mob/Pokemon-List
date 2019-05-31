import Component from './Component.js';

class Search extends Component {

    renderTemplate() {
        return /*html*/`
            <form class="search">
                <input name="search" placeholder="search Pokemon">
                <button>Search</button>
            </form>
            `;
    }
}

export default Search;
import Component from './Component.js';
import hashStorage from '../services/hash-storage.js';

function getCurrentPage() {
    const queryProps = hashStorage.get();
    let page = queryProps.page ? parseInt(queryProps.page) : 1;
    return page;
}

class Paging extends Component {

    render() {
        const dom = this.renderDOM();
        const prevButton = dom.querySelector('.prev');
        const nextButton = dom.querySelector('.next');

        if(!prevButton) {
            return dom;
        }

        function updatePage(change) {
            let page = getCurrentPage();
            page += change;
            hashStorage.set({ page });
        }

        prevButton.addEventListener('click', () => {
            updatePage(-1);
        });

        nextButton.addEventListener('click', () => {
            updatePage(1);
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <p class="paging">
                <button class="prev">⇦</button>
                <span>page x of y</span>
                <button class="next">⇨</button>
            </p>
        `;
    }
}

export default Paging;
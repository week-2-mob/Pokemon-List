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
        const currentPage = getCurrentPage();
        const perPage = 20;
        const totalCount = this.props.totalCount;
        console.log(totalCount, 'hello0');

        if(!totalCount) {
            setTimeout(() => {
                window.location = './';
            }, 4000);
            return /*html*/`
                <p>No results, try another search</p>
            `;
        }

        const lastPage = Math.ceil(totalCount / perPage);
        return /*html*/ `
            <p class="paging">
                <button class="prev" ${currentPage === 1 ? 'disabled' : '' }>⇦</button>
                <span>page ${currentPage} of ${lastPage}</span>
                <button class="next" ${currentPage === lastPage ? 'disabled' : ''}>⇨</button>
            </p>
        `;
    }
}

export default Paging;
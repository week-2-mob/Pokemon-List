import Component from './Component.js';

class Paging extends Component {

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
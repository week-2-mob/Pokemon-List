import QUERY from './Query.js';

const hashStorage = {
    get() {
        const hash = window.location.hash.slice(1); 
        return QUERY.parse(hash); 
    },

    set(queryProps) {
        const currentProps = hashStorage.get();
        Object.assign(currentProps, queryProps);
        window.location.hash = QUERY.stringify(currentProps);
    },

    remove(key) {
        const hash = hashStorage.get();
        delete hash[key];
        window.location.hash = QUERY.stringify(hash);
    }

};

export default hashStorage;
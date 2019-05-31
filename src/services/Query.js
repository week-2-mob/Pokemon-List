const QUERY = {

    parse(query) {    
        const searchParams = new URLSearchParams(query);
        const obj = {};
        
        searchParams.forEach((value, key) => {
            obj[key] = value;
        });
    
        return obj;
    },

    stringify(queryProps) {
        const searchParams = new URLSearchParams();
        Object.keys(queryProps).forEach(key => {
            searchParams.set(key, queryProps[key]);
        });
       
        const searchStrings = searchParams.toString();
    
        return searchStrings;
    }
};

export default QUERY;
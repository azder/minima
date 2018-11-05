/** Created by azder on 2018-10-29. */


const freeze$ = Object.freeze;


export default (

    (object, hash) => {

        Object.entries(hash).forEach(([key, value]) => object[key] = value);

        return freeze$(object);
    }

);


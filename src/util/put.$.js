/** Created by azder on 2018-10-31. */


import curry from '../util/curry';


export default curry(
    (key, object, value) => {
        object[key] = value;
        return value;
    }
);

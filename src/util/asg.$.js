/** Created by azder on 2018-10-31. */

import curry from '../util/curry';


export default curry(
    (key, value, object) => {
        object[key] = value;
        return object;
    }
);

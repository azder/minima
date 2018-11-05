/** Created by azder on 2018-10-31. */

import curry from '../util/curry';

export default curry(
    (meta, o) => {
        (`${meta}` === meta) ? o.message = meta : Object.assign(o, meta);
        return o;
    }
);

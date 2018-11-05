/** Created by azder on 2018-10-31. */


import K from '../keys';

import curry from '../util/curry';
import asg$ from '../util/asg.$';
import len from '../util/len';

export default curry(
    (collection, minima) => asg$(K.count, len(collection), minima)
);

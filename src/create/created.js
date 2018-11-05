/** Created by azder on 2018-10-31. */

import ecode from '../ecode';
import count$ from '../with/count.$';
import compose from '../util/compose';
import data$ from '../with/data.$';
import codes$ from '../with/codes.$';
import o from '../util/create-object';
import identity from '../util/identity';
import asg$ from '../util/asg.$';
import curry from '../util/curry';
import K from '../keys';


export default curry(
    (where, data) => compose(
        data$(data),
        asg$(K.self, where),
        Array.isArray(data) ? count$(data) : identity,
        codes$(ecode.k.created)
    )(o())
);

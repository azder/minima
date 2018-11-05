/** Created by azder on 2018-10-31. */

import ecode from '../ecode';
import count$ from '../with/count.$';
import compose from '../util/compose';
import data$ from '../with/data.$';
import codes$ from '../with/codes.$';
import o from '../util/create-object';

export default (

    collection => compose(
        data$(collection),
        count$(collection),
        codes$(ecode.ok)
    )(o())

);

/** Created by azder on 2018-10-31. */

import o from '../util/create-object';
import compose from '../util/compose';

import ecode from '../ecode';

import data$ from '../with/data.$';
import codes$ from '../with/codes.$';


export default (

    data => compose(
        data$(data),
        codes$(ecode.ok)
    )(o())

);

/** Created by azder on 2018-10-28. */

import o from './util/create-object';
import compose from './util/compose';

import codes$ from './with/codes.$';
import meta$ from './with/meta.$';
import data$ from './with/data.$';


// noinspection JSUnusedGlobalSymbols
export default (

    (ecode, meta, data) => compose(
        data$(data),
        meta$(meta),
        codes$(ecode)
    )(o())

);

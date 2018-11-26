/** Created by azder on 2018-10-31. */

import ecode from '../ecode';
import codes$ from '../with/codes.$';
import o from '../util/create-object';

import of$ from '../util/of.$';

export default (

    what => codes$(of$(ecode.s.notImplemented, what), o())

);

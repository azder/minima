/** Created by azder on 2018-10-31. */

import asg$ from '../util/asg.$';
import curry from '../util/curry';
import compose from '../util/compose';

import K from '../keys';

import hcode from '../hcode';
import xcode from '../xcode';


export default (

    curry(
        (ecode, minima) => compose(
            asg$(K.xcode, xcode(ecode)),
            asg$(K.hcode, hcode(ecode)),
            asg$(K.ecode, ecode),
        )(minima)
    )

);

/** Created by azder on 2018-10-29. */

import isString from '../is/string';

export default (

    (clazz, ecode) => (

        isString(clazz) && isString(ecode) && (
            clazz === ecode || ecode.startsWith(`${clazz}.`)
        )

    )

);

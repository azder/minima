/** Created by azder on 2018-10-28. */

import isString from './string';

import ec from '../ecode';

export const PATTERN = `^${ec.ROOT}\\.[-a-z.]*[^.*]$`;

const regx = new RegExp(PATTERN);


export default (

    ecode => isString(ecode) && !!ecode.match(regx)

);

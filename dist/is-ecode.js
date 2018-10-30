/** Created by azder on 2018-10-28. */
import isString from './is-string';
import ec from './ecode';
const root = `${ec.ROOT}`;
const regx = new RegExp(`^${root}\\..*[^.]$`);
export default (ecode => isString(ecode) && !!ecode.match(regx));
//# sourceMappingURL=is-ecode.js.map
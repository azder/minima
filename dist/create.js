/** Created by azder on 2018-10-28. */
import hcode from './hcode';
import xcode from './xcode';
const c = Object.create.bind(null, {});
export default ((ecode, meta, data) => {
  const o = c();
  o.ecode = ecode;
  o.hcode = hcode(ecode);
  o.xcode = xcode(ecode);
  `${meta}` === meta ? o.message = meta : Object.assign(o, meta);
  o.data = data;
  return o;
});
//# sourceMappingURL=create.js.map
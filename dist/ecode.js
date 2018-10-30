/** Created by azder on 2018-10-25. */
import xt$ from './xt.$';
import of$ from './of.$';
const ROOT = 'e';
const ANY = '_';
const good = of$(`${ROOT}.success`);
const clie = of$(`${ROOT}.client`);
const serv = of$(`${ROOT}.server`);
const sema = of$(clie('semantic'));
const vali = of$(sema('invalid'));
const data = of$(serv('data'));
const k = xt$(good, {
  [ANY]: good(),
  created: good('created')
});
const v = xt$(vali, {
  [ANY]: vali()
});
const m = xt$(sema, {
  [ANY]: sema(),
  invalid: v
});
const c = xt$(clie, {
  [ANY]: clie(),
  semantic: m
});
const d = xt$(data, {
  [ANY]: data()
});
const s = xt$(serv, {
  [ANY]: serv(),
  database: data(),
  notImplemented: serv('not-implemented')
}); // noinspection JSUnusedGlobalSymbols

export default {
  ok: k(),
  client: c(),
  semantic: m(),
  invalid: v(),
  server: s(),
  database: d(),
  a: of$.all,
  k,
  c,
  v,
  m,
  s,
  d,
  ROOT,
  ANY
};
//# sourceMappingURL=ecode.js.map
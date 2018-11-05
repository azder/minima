/** Created by azder on 2018-10-25. */

import xt$ from './util/xt.$';
import of$ from './util/of.$';


const ROOT = 'e';
const ANY = '_';
const DEFAULT = '';

const good = of$(`${ROOT}.success`);
const clie = of$(`${ROOT}.client`);
const serv = of$(`${ROOT}.server`);

const sema = of$(clie('semantic'));
const vali = of$(sema('invalid'));
const data = of$(serv('data'));


const k = xt$(good, {
    [ANY]:   good(DEFAULT),
    created: good('created'),
    found:   good('found'),
});

const v = xt$(vali, {
    [ANY]: vali(DEFAULT),
});

const m = xt$(sema, {
    [ANY]:   sema(DEFAULT),
    invalid: v,
});

const c = xt$(clie, {
    [ANY]:        clie(DEFAULT),
    unauthorized: clie('unauthorized'),
    forbidden:    clie('forbidden'),
    notFound:     clie('not-found'),
    semantic:     m,
});

const d = xt$(data, {
    [ANY]: data(DEFAULT),
});

const s = xt$(serv, {
    [ANY]:          serv(DEFAULT),
    notImplemented: serv('not-implemented'),
    database:       data(),
});


// noinspection JSUnusedGlobalSymbols
export default ({

    ok: k(''),

    client:   c(''),
    semantic: m(''),
    invalid:  v(''),

    server:   s(''),
    database: d(''),

    a: of$.all,

    k, c, v, m, s, d,

    ROOT, ANY, DEFAULT,

});

/** Created by azder on 2018-10-25. */

import xt$ from './util/xt.$';
import of$ from './util/of.$';


const ROOT = 'e';
const ANY = '_';
const EMPTY = '';
const DEFAULT = EMPTY;

const okay = of$(`${ROOT}.ok`);
const goto = of$(`${ROOT}.go`);
const clie = of$(`${ROOT}.cl`);
const serv = of$(`${ROOT}.sv`);

const sema = of$(clie('semantic'));
const vali = of$(sema('invalid'));
const data = of$(serv('data'));


const k = xt$(okay, {
    [ANY]:   okay(DEFAULT),
    created: okay('created'),
});


const g = xt$(goto, {
    [ANY]: goto(DEFAULT),
    found: goto('found'),
    tempo: goto('tempo'),
    perma: goto('perma'),
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

    ok: k(EMPTY),

    goto: g(EMPTY),

    client:   c(EMPTY),
    semantic: m(EMPTY),
    invalid:  v(EMPTY),

    server:   s(EMPTY),
    database: d(EMPTY),

    a: of$.all,

    k, g, c, v, m, s, d,

    ROOT, ANY, DEFAULT,

});

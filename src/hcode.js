import ecode from './ecode';
import isstr from './is/string';

const {ANY} = ecode;

const ANY_K = ecode.k[ANY];
const ANY_C = ecode.c[ANY];
const ANY_M = ecode.m[ANY];
const ANY_V = ecode.v[ANY];
const ANY_S = ecode.s[ANY];
const ANY_D = ecode.d[ANY];


const MINIMA_ERROR = 599;

const GOOD = 200;
const CLIE = 400;
const SEMA = 422;
const SERV = 500;

const MAP = Object.freeze({

    [ANY_K]: GOOD,
    [ANY_C]: CLIE,
    [ANY_M]: SEMA,
    [ANY_V]: SEMA,
    [ANY_S]: SERV,
    [ANY_D]: SERV,

    [ecode.k.created]:        201,
    [ecode.c.unauthorized]:   401,
    [ecode.c.forbidden]:      403,
    [ecode.c.notFound]:       404,
    [ecode.s.notImplemented]: 501,

});


// noinspection JSUnusedGlobalSymbols
export default (

    ec => {

        if (!isstr(ec)) {
            return MINIMA_ERROR;
        }

        if (MAP[ec]) {
            return MAP[ec];
        }

        if (ec.startsWith(ANY_K)) {
            return GOOD;
        }

        if (ec.startsWith(ANY_M)) {
            return SEMA;
        }

        if (ec.startsWith(ANY_C)) {
            return CLIE;
        }

        return SERV;

    }
);


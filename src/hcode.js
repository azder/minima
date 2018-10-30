import ecode from './ecode';

const ANY_K = ecode.k[ecode.ANY];
const ANY_C = ecode.c[ecode.ANY];
const ANY_M = ecode.m[ecode.ANY];
const ANY_V = ecode.v[ecode.ANY];
const ANY_S = ecode.s[ecode.ANY];
const ANY_D = ecode.d[ecode.ANY];


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
    [ecode.s.notImplemented]: 501,

});


// noinspection JSUnusedGlobalSymbols
export default (

    ec => {

        if (!ec) {
            return SERV;
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


/** Created by azder on 2018-10-29. */

import curry from './curry';
import of from './of';
import sort from './sort';


const ALL = Symbol('of$.ALL');

const of$ = curry(
    (parent, ecode) => {

        const ec = of(parent, ecode);
        if (!of$[ALL].has(ec)) {
            of$[ALL].add(ec);
        }
        return (ec);
    }
);


const GT = +0.5; // eslint-disable-line
const LT = -0.5;

const longer = (

    (a, b) => (b.length - a.length) || (a > b ? GT : LT) // sort longer on top

);

of$[ALL] = new Set();
of$.all = () => sort(longer, of$[ALL]);

export default of$;

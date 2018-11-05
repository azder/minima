/** Created by azder on 2018-10-29. */

import curry from './curry';
import of from './of';


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

of$[ALL] = new Set();
of$.all = () => [...of$[ALL]].sort();

export default of$;

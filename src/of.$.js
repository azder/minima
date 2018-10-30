/** Created by azder on 2018-10-29. */

const ALL = Symbol('of$.all');

const of$ = (

    parent => ecode => {
        const ec = ecode ? `${parent}.${ecode}` : parent;
        if (!of$[ALL].includes(ec)) {
            of$[ALL].push(ec);
        }
        return (ec);
    }

);

of$[ALL] = [];
of$.all = () => [...of$[ALL]].sort();

export default of$;

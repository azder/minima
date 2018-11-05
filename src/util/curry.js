/** Created by azder on 2018-10-31. */


const curry = (

    (fn, ...args) => (
        fn.length <= args.length
            ? fn(...args)
            : curry.bind(null, fn, ...args)
    )

);


export default curry;

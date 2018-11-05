/** Created by azder on 2018-10-31. */


export default (

    (...fns) => arg => fns.reduceRight((x, fn) => fn(x), arg)

);

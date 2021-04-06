"use strict";

//Basic function

async function foo(x) {
    return x * 2;
}
foo(5).then(console.log);
// let r = foo(5).then(console.log);
// console.log(r);



// "use strict";

// Basic function

// async function foo(x) {
//
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve(x * 2), 1000)
//     });
//
//     let result = await promise;
//
//     console.log(result);
//
//     //return x * 2;
// }
//
// foo(5);
// let r = foo(5);
// console.log(r);

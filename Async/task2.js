// "use strict";
// const waittime=5000;
//
//
// const delay = () => new Promise(resolve => setTimeout(()=>{
//     console.log("Operation finished");
//     resolve();
// }, waittime));
//
// async function something() {
//     console.log("Program started");
//     await delay();
//     console.log("Program finished");
// }
// something();


"use strict";
const waittime=5000;


const delay = () => new Promise(resolve => setTimeout(()=>{
    console.log("Operation finished");
    resolve();
}, waittime));

console.log("Program started");
delay().then(() => {
    console.log("Program finished");
});
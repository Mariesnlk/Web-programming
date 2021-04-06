
"use strict";
const fetch = require('node-fetch');
const url='http://127.0.0.1:7777/';


const getData = url => {
    try {
        fetch(url)
            .then(res => res.text())
            .then(body => console.log(body));

    } catch (error) {
        console.log(error);
    }
};

getData(url);


// const getData = async url => {
//     try {
//         const response = await fetch(url);
//         let res = await response.text();
//         console.log(res);
//         return res;
//     } catch (error) {
//         console.log(error);
//     }
// };
//
// getData(url);


"use strict";
let array = [1, 2, 3, 1, -5, 1, 1, 0, -5, 8, 3];
//4
console.log(Math.max(...array));

//5
array.sort((a, b) => a - b)
console.log(array.join(", "))

//4
let max = array[array.length - 1]
console.log(`Maximum: ${max}`)

const forLoopMinMax = () => {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        let value = array[i]
        max = (value > max) ? value : max
    }
    return [max]
}

const [forLoopMax] = forLoopMinMax()
console.log(`Maximum: ${forLoopMax}`)

const maxUsingReduce = () => array.reduce((max, currentValue) => Math.max(max, currentValue), array[0])
console.log(`Maximum: ${maxUsingReduce()}`)

//6
const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
console.log(countOccurrences(array));

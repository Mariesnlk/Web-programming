let fs = require('fs'),
    filename = 'anagrams.txt',
    encoding = 'utf-8';

fs.readFile(filename, encoding, function (err, data) {

    let lines = data.split('\n');

    // trim whitespace and convert to lower case
    for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].trim().toLowerCase();
    }

    // remove all duplicate lines
    lines = lines.filter(function (item, index, array) {
        return index === array.indexOf(item);
    });

    let words = {};

    for (let i = 0; i < lines.length; i++) {
        let word = lines[i];
        if (word !== '') {
            let key = word.split('').sort().join('');
            let list = words[key] || [];
            list.push(word);
            words[key] = list;
        }
    }

    // create a list of anagrams from the hash table
    let anagrams = [];
    for (let key in words) {
        if (words.hasOwnProperty(key)) {
            if (words[key].length > 1) anagrams.push(words[key]);
        }
    }

    // sort the list 
    anagrams.sort(function (a, b) {
        return (b.length - a.length);
    });

    // print results
    let arrayString =  anagrams.join("\n");
    let str2 = arrayString.replace(/,/g, " - ");
    console.log(str2);

});
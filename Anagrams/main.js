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

    // for each word sort the characters alphabetically to create
    // a hash key (all anagrams will generate the same key!)
    // and then append this word to the list of all other words
    // with the same key
    let words = {};

    for (let i = 0; i < lines.length; i++) {
        let word = lines[i];
        if (word !== '') {
            // generate an anagram key by sorting all characters alphabetically
            let key = word.split('').sort().join('');
            // get the list of anagrams that match this word from the hash table
            let list = words[key] || [];
            // add this word to the other anagrams with this key
            list.push(word);
            // assign the list back to the anagram hash table
            words[key] = list;
        }
    }

    // create a list of anagrams from the hash table, exclude words with no anagrams
    let anagrams = [];
    for (let key in words) {
        if (words.hasOwnProperty(key)) {
            if (words[key].length > 1) anagrams.push(words[key]);
        }
    }

    // sort the list by the number of anagrams descending
    anagrams.sort(function (a, b) {
        return (b.length - a.length);
    });

    // print results
    let arrayString =  anagrams.join("\n");
    let str2 = arrayString.replace(/,/g, " - ");
    console.log(str2);

});
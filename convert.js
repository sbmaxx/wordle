const fs = require('fs');
const file = fs.readFileSync('./words.txt', 'utf8');
const shuffle = require('lodash/shuffle');

const filtered = shuffle(file.split('\n').filter(f => f.length === 5));

const rndIndx = Math.round(Math.random() * filtered.length);
const rndWord = filtered[rndIndx];

console.log(Math.round(Math.random() * filtered.length))
console.log(`idx: ${rndIndx}, word: ${rndWord}`);

fs.writeFileSync('src/constants/wordlist.ts', `export const WORDS = ${JSON.stringify(filtered, null, 4)}`);
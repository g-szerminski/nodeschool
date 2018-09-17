const fs = require('fs');
const readFile = fs.readFileSync(process.argv[2]);
//const readFile = fs.readFileSync('./my-first-IO.js');
const newLine = readFile.toString().split('\n').length - 1;
console.log(newLine);
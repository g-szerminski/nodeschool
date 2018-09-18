const fs = require('fs');
const path = require('path');

const readDir = fs.readdir(process.argv[2], 'UTF-8', function callback (err, list) { 
    if (err) {
        console.log(err);
    } else {
        const txtFiles = list.path.extname('txt');
        const newLine = list.split('\n').length - 1;
    }
});
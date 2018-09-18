const fs = require('fs');
const readFile = fs.readFile(process.argv[2], 'UTF-8', function callback (err, data) {
    if (err) {
        console.log('Error' + err);
    } else {
        const newLine = data.split('\n').length - 1;
        console.log(newLine);
    }
});

// const fs = require('fs');
// fs.readFile(process.argv[2], 'UTF-8',function (err, contents) {
//   if (err) {
//     console.log(err);
//   }
//     // fs.readFile(file, 'utf8', callback) can also be used
//     // const lines = contents.toString().split('\n').length - 1
//     const lines = contents.split('\n').length - 1;
//     console.log(lines);
// });
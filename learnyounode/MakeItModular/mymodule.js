const rd = require('./filter.js');
const dir = process.argv[2];
const ext = process.argv[3];

rd(dir, ext, function(err, list) {
    if (err) {
        console.error('Jest error');
    }

    list.forEach(function(file) {
        console.log(file);
    })
});
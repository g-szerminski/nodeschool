const lodash = require("lodash");

const worker = function(articlesList) {
       return lodash.sortBy(articlesList, 'quantity').reverse();
    };
    // export the worker function as a nodejs module
    module.exports = worker;
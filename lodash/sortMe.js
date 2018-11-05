const lodash = require("lodash");

const worker = function(articlesList) {
       return lodash.sortBy(articlesList, 'quantity').reverse();
    };
module.exports = worker;
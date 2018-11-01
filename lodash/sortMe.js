const lodash = require("lodash");

const articlesList = 	
	[{ article: 41,   quantity: 24 },
    { article: 2323, quantity: 2  },
    { article: 655,  quantity: 23 }];

    const worker = function() {
        lodash.sortBy(articlesList, 'quantity');
    };

    // export the worker function as a nodejs module
    module.exports = worker;
	const lodash = require('lodash');

	const worker = function(arr) {
        return lodash.chain(arr)
        .map(item => item + 'chained')
        .map(item => item.toUpperCase())
        .sortBy()
 		.value();
	};

	module.exports = worker;

// 	const _ = require("lodash");

// var wordsmodify = function (arr) {
//     return _.chain(arr)
//       .map(item => item + 'Chained')
//       .map(item => item.toUpperCase())
//       .sortBy()
//       .value();
// };

// module.exports = wordsmodify;
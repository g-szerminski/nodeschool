const lodash = require('lodash');

const countedComments = function(arr) {
	return lodash.chain(arr)
	.groupBy('username')
	.map(function(item, name) {
		return {username: name, comment_count: lodash.size(item)}
	})
	.sortBy(function(counted) {
		return -counted['comment_count'];
	})
};

module.exports = countedComments;



// Alternative solution

// const lodash = require('lodash');

// const worker = function(arr) {
// 	var countedComments = [];
// 	// const grupped = lodash.groupBy(arr, 'username');
// 	arr = lodash.groupBy(arr, 'username');
// 	lodash.forEach(arr, function(item, name) {
// 		countedComments.push({
// 			username: name,
// 			comment_count: lodash.size(item)
// 		});
// 	});
// 	return lodash.sortBy(countedComments, 'comment_count').reverse();
// };

// module.exports = worker;
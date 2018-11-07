const lodash = require('lodash');

const townList = function (item) {
	var result = {
		hot: [],
		warm: []
	};

	const checkTemp = function (item) {
		const temp = item > 19;
		return temp;
	};
	// const checkTemp = (item) => item > 19;

	lodash.forEach(item, function (town, townName) {
		if (lodash.every(town, checkTemp)) {
			result.hot.push(townName);
		} else if (lodash.some(town, checkTemp)) {
			result.warm.push(townName);
		}
	});
	return result;
};

module.exports = townList;
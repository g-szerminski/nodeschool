const lodash = require('lodash');

var townList = function (item) {
	var rusult = {
		hot: [],
		warm: []
	};

	const checkTemp = function (item) {
		item > 19;
	};
	// var checkTemp = (item) => item > 19;

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



// const _ = require("lodash");

// var tempsort = function (item) {
    
//     var result = {
//         hot: [],
//         warm: []
//     };
    
//     // If temp > 19
//     const check_temp = (item) => item > 19;

//     _.forEach(item, function (town, townname) {

//         if (_.every(town, check_temp)) {
//             result.hot.push(townname);
//         } else if (_.some(town, check_temp)) {
//             result.warm.push(townname);
//         }

//     });

//     return result;
// };
// module.exports = tempsort;
	const lodash = require('lodash');

	[
    { id: 22, username: "martin", active: true},
    { id: 23, username: "max",    active: false},
    { id: 24, username: "linda",  active: false}
  ];

  const worker = function (example) {
  	return lodash.filter(example, {active: true});
  };

  module.exports = worker;
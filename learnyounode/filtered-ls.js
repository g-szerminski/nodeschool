const fs = require('fs');
const path = require('path');
const ext = '.' + process.argv[3];

fs.readdir(process.argv[2], function (err, list) {
	if (err) return console.error(err);
	list.forEach(function (file) {
		if (path.extname(file) === ext) {
			console.log(file);
		}
	})
});

//------------------------------------------------------
// Dla plików z rozszerzeniem .txt

//const fs = require('fs');
//const path = require('path');
//const ext = ('.txt');
//
//fs.readdir(process.argv[2], function (err, list) {
//	if (err) return console.error(err);
//	list.forEach(function (file) {
//		if (path.extname(file) === ext) {
//			console.log(file);
//		}
//	})
//});

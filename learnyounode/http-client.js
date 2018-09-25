const http = require('http');

http.get(process.argv[2], function (res) {
  res.setEncoding('utf8');
  res.on('data', console.log);
  res.on('error', console.error);
}).on('error', console.error);

//http.get(process.argv[2], function(res) {
//  console.log("Got response: " + res.statusCode);
//})
//  .on('error', function(e) {
//  console.error("Got error: " + e.message);  
//});

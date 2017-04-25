var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res) => {
  // pipe the file-reading stream to the response object and Bob's your uncle
  fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(process.argv[2]);
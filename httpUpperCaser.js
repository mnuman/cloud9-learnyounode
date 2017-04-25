var http = require('http');
var map = require('through2-map');
var server = http.createServer( (req, res) => {
  if (req.method === 'POST'){
    req.pipe(map(function(chunk){
      return chunk.toString().toUpperCase()
    })).pipe(res);
  } else {
    res.end('Send me a POST, mate!\n');
  }
  
});
server.listen(process.argv[2]);
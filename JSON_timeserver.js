var http = require('http');
var url = require('url');

var server = http.createServer( (req,res) => {
  if (req.method === 'GET'){
    var theUrl = url.parse(req.url, true);
    var path = theUrl.pathname;
    var isoDate = theUrl.query.iso;
    var jsonData = {};
    // console.log('Path: '+ path);
    // console.log('Parameters: ' + isoDate);
    if (path === '/api/parsetime'){
      var dt = new Date(isoDate);
      jsonData["hour"] = dt.getHours();
      jsonData["minute"] = dt.getMinutes();
      jsonData["second"] = dt.getSeconds();
      res.end(JSON.stringify(jsonData));
    } else if ( path === '/api/unixtime') {
      var dt = new Date(isoDate);
      jsonData["unixtime"] = dt.getTime();
      res.end(JSON.stringify(jsonData));
    } else {
        res.writeHead(404);
        res.end('Invalid endpoint, bro!\n');
    }
  }
});

server.listen(process.argv[2]);
//server.listen(process.env.PORT, process.env.IP);
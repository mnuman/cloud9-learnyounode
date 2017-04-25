var fs = require('fs')  
// do it the node way: ASYNC !
fs.readFile(process.argv[2], 'utf-8', function callback(err, data) {
  // Oops, array has one line entry more than the actual number of lines
  console.log(data.split('\n').length-1);
});

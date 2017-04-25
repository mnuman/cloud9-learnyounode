var fs = require('fs')  
buf = fs.readFileSync(process.argv[2]);
lineArray = buf.toString().split('\n');
// Oops, array has one line entry more than the actual number of lines
console.log(lineArray.length-1);   

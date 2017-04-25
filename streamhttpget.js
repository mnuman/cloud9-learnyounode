var http = require('http');
var allData = '';
http.get(process.argv[2], function (response){
  response.setEncoding('utf-8');
  response.on("data", (data) => {
      allData += data;
  });
  response.on("end", () => {
      console.log(allData.length);
      console.log(allData);
  });
});
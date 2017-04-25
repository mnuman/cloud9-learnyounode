var http = require('http');
var allData = ['','',''];
var openStreams = 3;
function handleData(response,idx){
  response.setEncoding('utf-8');
  response.on("data", (data) => {
      allData[idx] += data;
  });
  response.on("end", handleEnd);
}

function handleEnd(){
  openStreams--;
  if (openStreams === 0){
    console.log(allData[0]);
    console.log(allData[1]);
    console.log(allData[2]);
  }
}
http.get(process.argv[2], (response) => {
  handleData(response,0);
});
http.get(process.argv[3], (response) => {
  handleData(response,1);
});
http.get(process.argv[4], (response) => {
  handleData(response,2);
});

var net = require('net');
// make sure that the numbers contain 2 positions, use a trailing zero.
function fmt2(n) {
    return ("0" + n).slice(-2);
}
// accept tcp connections and send the current date as the response.
var server = net.createServer((socket) => {
    var now = new Date();
    var formattedData = now.getFullYear() + '-' + fmt2(now.getMonth()+1) + '-' +
        fmt2(now.getDate())+ ' ' + fmt2(now.getHours()) + ':' + fmt2(now.getMinutes()) + '\n';
    socket.end(formattedData);
});
server.listen(process.argv[2]);

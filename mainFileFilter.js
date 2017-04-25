var mff = require('./fileFilter');
mff( process.argv[2], process.argv[3], logger);
function logger(err, data){
    if (err){
        console.log(err);
        process.exit(-1);
    }
    for (var i = 0; i < data.length; i++){
        console.log(data[i]);
    }
}
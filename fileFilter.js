var fs = require('fs');
var path = require('path');
module.exports = function(dir, extension, callback) {
    fs.readdir(dir, function(err, data) {
        var ext = '.' + extension;
        if (err) {
            return callback(err);
        }
        else {
            var result = [];
            for (var i = 0; i < data.length; i++) {
                if (path.extname(data[i]) === ext) {
                    result.push(data[i]);
                }
            }
            return callback(err, result);
        }
    });
};
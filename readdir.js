var fs = require('fs');

var filterFiles = function (err, files){
  if (err){
      console.log(err);
      process.exit(-1);
  }
  for (var i = 0; i < files.length; i++){
      // if file matches extension, output its name to console
      if (files[i].endsWith('.' + process.argv[3])){
          console.log(files[i]);
      }
  }
    
};

fs.readdir( process.argv[2],filterFiles);
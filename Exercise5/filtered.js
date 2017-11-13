var fs = require('fs');
 fs.readdir(process.argv[2], function callback (err, list){
     if (err){
         console.log('Error');
     } else {
         list.filter(function (filename){
             return filename.indexOf('.' + process.argv[3]) >= 0
         }).forEach(function (file) {
             console.log(file);
         })
     }
 });
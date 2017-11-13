var arr = process.argv[2];
var fs = require('fs');
fs.readFile(arr, function doneReading(err, fileContents) {
    if (err){
        console.log('Error')
    } else {
        var number = fileContents.toString().split('\n').length -1;
    console.log(number);
    }

});
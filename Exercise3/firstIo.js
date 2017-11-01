var myarr = process.argv[2];
var fs = require('fs');
var file = fs.readFileSync(myarr).toString().split('\n');
console.log(file.length -1);
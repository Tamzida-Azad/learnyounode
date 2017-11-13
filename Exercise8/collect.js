var http = require('http');
var x = process.argv[2];
var str = '';
http.get(x, function(response) {
  response.setEncoding('utf8');
  response.on("data", function(data) {
    str += data;
  });
  response.on('end', function() {
    console.log(str.length);
    console.log(str);
  });
});
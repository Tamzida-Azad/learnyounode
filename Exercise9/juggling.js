var http = require('http');
var link = process.argv.slice(2);
var count = 0;

var array= [];
link.forEach(getData);

function getData(url, index) {
  http.get(url, function(response) {
    var str = '';
    response.setEncoding('utf8');
    response.on("data", function(data) {
      str += data;
    });
    response.on('end', function() {
      array[index] = str;
      count++;
      if (count === link.length) {
        array.forEach(function(msg) {
          console.log(msg);
        });
      }
    });
  });
}
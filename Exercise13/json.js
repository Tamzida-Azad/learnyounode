var http = require("http");
var url = require('url');
var portNumber = process.argv[2];

function parsetime(time) {
  // Parse time as ISO
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  };
}

function unixtime(time) {
  // Parse time as unix time
  return {
    "unixtime": time.getTime()
  };
}

var server = http.createServer(function(req, res) {
  // request handling logic...
  var parsedURL = url.parse(req.url, true);
  var time = new Date(parsedURL.query.iso);
  var result;
  if (req.url.search('parsetime') != -1) {
    result = parsetime(time);
  } else if (req.url.search('unixtime') != -1) {
    result = unixtime(time);
  }

  if (result) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
})
server.listen(portNumber);
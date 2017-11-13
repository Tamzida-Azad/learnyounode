var mymodule = require('./find');
mymodule(process.argv[2], process.argv[3], function callback(err, data) {
  if (err) {
    return callback(err);
  }
  data.forEach(function(file) {
    console.log(file);
  });
});
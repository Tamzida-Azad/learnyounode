module.exports = function findFziles(dir, ext, callback) {
  var fs = require('fs');
  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err);
    } else {
      var data = list.filter(function(filename) {
        return filename.indexOf('.' + ext) >= 0;
      });
      return callback(null, data);
    }
  });
};
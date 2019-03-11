module.exports = function getHTML (options, callback) {
  var https = require("https");

  var chunks = []

  https.get(options, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      chunks.push(data);
      callback(chunks);
    });
  })
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


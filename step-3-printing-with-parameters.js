function getAndPrintHTML (options) {
  var https = require("https");

  var chunks = []

  https.get(options, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      chunks.push(data);
      console.log(chunks);
    });
  })
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

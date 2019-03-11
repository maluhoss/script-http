function getAndPrintHTML () {
  var https = require("https");

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var chunks = []

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      chunks.push(data);
      console.log(chunks);
    });
  })
}

getAndPrintHTML();

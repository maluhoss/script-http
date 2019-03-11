function getHTML (options, callback) {
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

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);

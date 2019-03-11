var getHTML = require('../step-5-http-functions')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
//transform html string to uppercase
  console.log(html.join('').toUpperCase());

}

getHTML(requestOptions, printUpperCase);


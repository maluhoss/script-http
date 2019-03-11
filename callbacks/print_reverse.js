var getHTML = require('../step-5-http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var reverseElements = html.join('').split('').reverse()
  console.log(reverseElements.join(''));

}

getHTML(requestOptions, printReverse);
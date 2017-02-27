const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('template.pug');

var tidy = require("tidy-html5").tidy_html5

var html = compiledFunction({
  name: 'Timothy'
})

console.log(html);
var result = tidy(html, {"indent-spaces": 4});

console.log(result);

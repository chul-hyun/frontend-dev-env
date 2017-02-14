const path = require('path');

const root = path.resolve(__dirname, 'app');


let common = {};

common.name = 'index';


let entry = {}

entry.common = {}
entry.common = Object.assign({}, common)
entry.common.dir = path.join(root, 'src');


entry.script = {}

entry.script = Object.assign({}, entry.common)
entry.script.ext = '.js'
entry.script.file = path.format(entry.script)
entry.script.filename = path.basename(entry.script.file)


entry.style = {}

entry.style = Object.assign({}, entry.common)
entry.style.ext = '.scss'
entry.style.file = path.format(entry.style)
entry.style.filename = path.basename(entry.style.file)


entry.html = {}

entry.html = Object.assign({}, entry.common)
entry.html.ext = '.html'
entry.html.file = path.format(entry.html)
entry.html.filename = path.basename(entry.html.file)


let output = {}

output.common = {}
output.common = Object.assign({}, common)
output.common.dir = path.join(root, 'dist');


output.script = {}

output.script = Object.assign({}, output.common)
output.script.ext = '.js'
output.script.file = path.format(output.script)
output.script.filename = path.basename(output.script.file)


output.style = {}

output.style = Object.assign({}, output.common)
output.style.ext = '.scss'
output.style.file = path.format(output.style)
output.style.filename = path.basename(output.style.file)


output.html = {}

output.html = Object.assign({}, output.common)
output.html.ext = '.html'
output.html.file = path.format(output.html)
output.html.filename = path.basename(output.html.file)


module.exports = {
  common,
  output,
  entry
}

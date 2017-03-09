const through = require('through2')
const path = require('path')
const fs = require('fs')

module.exports = function(indexFile){
  let indexFileDir = path.dirname(indexFile)
  let code         = ''

  function bufferContents(file, encoding, cb) {
    let relativePath = ('.' + path.sep + path.relative(indexFileDir, file.path)).replace(/\\/g, '/')
    let moduleName   = path.basename(file.path)

    code += `export ${moduleName} from '${relativePath}'\r\n`
  }

  function endStream(cb) {
    fs.writeFile(indexFile , code, 'utf8', (err) => {
      if (err) throw err;

      this.push(indexFile);
      cb();
    })
  }

  return through.obj(bufferContents, endStream)
}

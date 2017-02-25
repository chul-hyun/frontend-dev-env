
/*
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const gutil = require('gulp-util')
const through = require('through2')

console.log('test')

/**
 * [fsOperationFailed description]
 * @param  {[type]} stream     [description]
 * @param  {[type]} sourceFile [description]
 * @param  {[type]} err        [description]
 * @return {[type]}            [description]

function fsOperationFailed(stream, sourceFile, err) {
  if(err) {
    if(err.code !== 'ENOENT') {
      stream.emit('error', new gutil.PluginError('gulp-changed', err, {fileName: sourceFile.path}))
    }

    stream.push(sourceFile)
  }

  return err
}

const sha1 = buf => crypto.createHash('sha1')
                          .update()
                          .update(buf)
                          .digest('hex')

// Only push through files changed more recently than the destination files
function compareLastModifiedTime(stream, cb, sourceFile, targetPath) {
  fs.stat(targetPath, (err, targetStat) => {
    if(!fsOperationFailed(stream, sourceFile, err)) {
      if(sourceFile.stat && sourceFile.stat.mtime > targetStat.mtime) {
        stream.push(sourceFile)
      }
    }

    cb()
  })
}

// Only push through files with different SHA1 than the destination files
function compareSha1Digest(stream, cb, sourceFile, targetPath) {
  fs.readFile(targetPath, (err, targetData) => {
    if(sourceFile.isNull()) {
      cb(null, sourceFile)

      return
    }

    if(!fsOperationFailed(stream, sourceFile, err)) {
      const sourceDigest = sha1(sourceFile.contents)
      const targetDigest = sha1(targetData)

      if(sourceDigest !== targetDigest) {
        stream.push(sourceFile)
      }
    }

    cb()
  })
}

module.exports = () => through.obj((file, enc, cb) => {
  const dest2 = typeof dest === 'function' ? dest(file) : dest
  let newPath = path.resolve(opts.cwd, dest2, file.relative)

  if(opts.extension) {
    newPath = gutil.replaceExtension(newPath, opts.extension)
  }

  opts.hasChanged(this, cb, file, newPath)
})
*/

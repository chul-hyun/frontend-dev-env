import source from 'vinyl-source-stream';
import browserify from 'browserify';
import through from 'through2';

function babelify(config){
  return through.obj(function(file, encoding, cb) {
    browserify(file.path, config.browserify)
      .transform('babelify', config.babelify)
      .bundle()
      .pipe(source(path.basename(file.path)))
      .pipe(through.obj((browserFile, encoding, callback) => {
        cb(null, browserFile);
        callback(null, browserFile);
      }))
  })
}

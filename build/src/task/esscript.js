import gulp from 'gulp';
import browserify from 'browserify';
import changed from 'gulp-changed';
import through from 'through2';
import source from 'vinyl-source-stream';
import path from 'path';

import PATHS from '../var/PATHS'
import config from '../config'

gulp.task('esscript', () => {
  let dest = PATHS.output.script.dir

  gulp.src(PATHS.entry.script.file)
    .pipe(changed(dest))
    .pipe(through.obj(function(file, encoding, cb) {
      browserify(file.path, config.browserify)
        .transform('babelify', config.babelify)
        .bundle()
        .pipe(source(path.basename(file.path)))
        .pipe(through.obj((browserFile, encoding, callback) => {
          cb(null, browserFile);
          callback(null, browserFile);
        }))
    }))
    .pipe(gulp.dest(dest))
});

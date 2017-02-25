import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin'
import changed from 'gulp-changed';

import PATHS from '../var/PATHS'
import config from '../config'

let configHtmlmin = config.htmlmin
let src           = PATHS.entry.html.glob
let dest          = PATHS.output.html.dir

if(configHtmlmin){
  gulp.task('min-html', function() {
    gulp.src(src)
      .pipe(changed(dest))
      .pipe(htmlmin(configHtmlmin))
      .pipe(gulp.dest(dest));
  })
}else {
  gulp.task('min-html', function() {
    gulp.src(src)
      .pipe(gulp.dest(dest));
  });
}

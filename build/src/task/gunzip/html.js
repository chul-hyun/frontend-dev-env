import gulp from 'gulp'
import gzip from 'gulp-gzip'
import changed from 'gulp-changed'

import PATHS from '../../var/PATHS'

gulp.task('gunzip-html', () => {
  let outputHtml = PATHS.output.html
  let htmlFiles = outputHtml.glob
  let htmlDir = outputHtml.dir

  return gulp.src(htmlFiles)
    .pipe(changed(htmlDir))
    .pipe(gzip())
    .pipe(gulp.dest(htmlDir))
})

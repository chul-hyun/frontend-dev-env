import gulp from 'gulp'
import gzip from 'gulp-gzip'
import changed from 'gulp-changed'

import PATHS from '../../var/PATHS'

gulp.task('gunzip-script', () => {
  let outputHtml = PATHS.output.script
  let scriptFiles = outputHtml.glob
  let scriptDir = outputHtml.dir

  return gulp.src(scriptFiles)
    .pipe(changed(scriptDir))
    .pipe(gzip())
    .pipe(gulp.dest(scriptDir))
})

import gulp from 'gulp'
import gzip from 'gulp-gzip'
import changed from 'gulp-changed'

import PATHS from '../var/PATHS'

gulp.task('gunzip', () => {
  let common = PATHS.output.common
  return gulp.src(common.glob)
    .pipe(changed(common.dir))
    .pipe(gzip())
    .pipe(gulp.dest(common.dir))
})

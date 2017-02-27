import gulp from 'gulp'
import gzip from 'gulp-gzip'
import changed from 'gulp-changed'

import PATHS from '../../var/PATHS'

export function createGzTask(type){
  gulp.task(`gunzip-${type}`, () => {
    let output = PATHS.output[type]
    let files = output.glob
    let dir = output.dir

    return gulp.src(files)
      .pipe(changed(dir))
      .pipe(gzip())
      .pipe(gulp.dest(dir))
  })
}

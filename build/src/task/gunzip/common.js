import gulp from 'gulp'
import gzip from 'gulp-gzip'

import PATHS from '../../var/PATHS'

export function createGzTask(type){
  gulp.task(`gz-${type}`, () => {
    let output = PATHS.output[type]
    let files  = output.glob
    let dir    = output.dir

    return gulp.src(files)
      .pipe(gzip())
      .pipe(gulp.dest(dir))
  })
}

/*
import gulp from 'gulp'
import uglify from 'gulp-uglify'

import PATHS from '../../var/PATHS'
import config from '../../config'

gulp.task('min-script', () => {
  let script = PATHS.output.script
  return gulp.src(script.file)
    .pipe(uglify(config.web.min.script))
    .pipe(gulp.dest(script.dir))
})
*/

import gulp from 'gulp'

gulp.task('min-script',() => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve()
    }, 1000)
  })
})

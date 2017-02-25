import gulp from 'gulp'
import uglify from 'gulp-uglify'

import PATHS from '../var/PATHS'
import config from '../config'

gulp.task('uglifyJS', () => {
  let script = PATHS.output.script
  return gulp.src(script.file)
    .pipe(uglify())
    .pipe(gulp.dest(script.dir))
})

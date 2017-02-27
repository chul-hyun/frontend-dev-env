import gulp from 'gulp'
import eslint from 'gulp-eslint'
import changed from 'gulp-changed'
import path from 'path'

import PATHS from '../../var/PATHS'

gulp.task('lint-script', () => {
  return gulp.src([PATHS.entry.script.glob])
    .pipe(eslint({
      configFile: PATHS.config.web.lint.script
    }))
    .pipe(eslint.format('codeframe'))
    .pipe(eslint.failAfterError())
})

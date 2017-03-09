const gulp = require('gulp')
const changed = require('gulp-changed')
const babel = require('gulp-babel')

module.exports = (taskName, config) => {
  gulp.task(taskName, () => (
    gulp.src(config.src)
      .pipe(changed(config.dest))
      .pipe(babel({extends : config.babelrcFile}))
      .pipe(gulp.dest(config.dest))
  ))
}

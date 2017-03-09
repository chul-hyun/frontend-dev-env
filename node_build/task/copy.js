const gulp = require('gulp')
const changed = require('gulp-changed')

module.exports = (taskName, config) => {
  gulp.task(taskName, () => (
    gulp.src(config.src)
      .pipe(changed(config.dest))
      .pipe(gulp.dest(config.dest))
  ))
}

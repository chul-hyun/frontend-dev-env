const gulp = require('gulp')
const gulpExec = require('./plugin/gulpExec')

module.exports = (taskName, config) => {
  gulp.task(taskName, () => gulp.src(config.src)
    .pipe(gulpExec())
  )
}

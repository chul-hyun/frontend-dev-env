const gulp = require('gulp')
const createIndex = require('./plugin/createIndex')

module.exports = (taskName, config) => {
  gulp.task(taskName, () => gulp.src(config.src)
    .pipe(createIndex(config.indexFile))
    .pipe(gulp.dest(config.dest))
  )
}

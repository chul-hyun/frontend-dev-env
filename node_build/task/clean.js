const gulp = require('gulp')
const del = require('del')

module.exports = (taskName, config) => {
  gulp.task(taskName, () => {
    return del(config.src, { force: true })
  })
}

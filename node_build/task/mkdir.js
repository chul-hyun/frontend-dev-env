const gulp = require('gulp')
const mkdirp = require('mkdirp')

const config = require('../config').mkdir

module.exports = (taskName, config) => {
  gulp.task(taskName, (cb) => {
    mkdirp(config.src, cb)
  })
}

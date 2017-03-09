const gulp = require('gulp')
const config = require('./config')

const taskNames = [
  'babel',
  'clean',
  'copy',
  'mkdir',
  'start_gulp',
  'stop_gulp'
]

taskNames.forEach(taskName =>
  require(`./task/${taskName}`)(taskName, config[taskName])
)

gulp.task('watch', () => {
  gulp.watch(config.watch.src, gulp.parallel('start'))
})

gulp.task('init', gulp.series('clean', 'mkdir'))
gulp.task('build',  gulp.series('init', gulp.parallel('copy', 'babel')))
gulp.task('start', gulp.series('stop_gulp', 'build', 'start_gulp'))
gulp.task('default', gulp.series('init', 'start', 'watch'))

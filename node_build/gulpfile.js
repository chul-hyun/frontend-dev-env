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
  console.log('watch src', config.watch.src);
  gulp.watch(config.watch.src, gulp.series('stop_gulp', 'start'))
    .on('changed', () => {
      console.log('changed');
    })
})

gulp.task('init', gulp.series('clean', 'mkdir'))
gulp.task('build',  gulp.series('init', gulp.parallel('copy', 'babel')))
gulp.task('start', gulp.series('build', 'start_gulp'))
gulp.task('default', gulp.series('init', 'start', 'watch'))

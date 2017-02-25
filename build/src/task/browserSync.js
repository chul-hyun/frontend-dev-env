import gulp from 'gulp'

import browserSync from '../var/browserSync'
import config from '../config'

gulp.task('browserSync', () => {
  browserSync.init(config.browserSync)
})

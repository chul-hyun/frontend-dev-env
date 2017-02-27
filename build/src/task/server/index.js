/*
import gulp from 'gulp'

import browserSync from '../../var/browserSync'
import config from '../../config'

gulp.task('server', () => {
  browserSync.init(config.web.server)
})
*/

import gulp from 'gulp'

gulp.task('server',() => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve()
    }, 1000)
  })
})

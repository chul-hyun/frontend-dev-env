/*
import { createGzTask } from './common'

createGzTask('script')
*/

import gulp from 'gulp'

gulp.task('gz-script',() => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve()
    }, 1000)
  })
})

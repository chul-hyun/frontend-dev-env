/*
import { createGzTask } from './common'

createGzTask('style')
*/

import gulp from 'gulp'

gulp.task('gz-style',() => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve()
    }, 1000)
  })
})

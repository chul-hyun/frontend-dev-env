/*
import { createGzTask } from './common'

createGzTask('html')
*/

import gulp from 'gulp'

gulp.task('gz-html',() => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve()
    }, 1000)
  })
})

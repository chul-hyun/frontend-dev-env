/*
import gulp from 'gulp'
import gzip from 'gulp-gzip'
import changed from 'gulp-changed'

import PATHS from '../../var/PATHS'

gulp.task('gunzip-style', () => {
  let outputHtml = PATHS.output.style
  let styleFiles = outputHtml.glob
  let styleDir = outputHtml.dir

  return gulp.src(styleFiles)
    .pipe(changed(styleDir))
    .pipe(gzip())
    .pipe(gulp.dest(styleDir))
})
*/

import gulp from 'gulp'

gulp.task('gz-style',() => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve()
    }, 1000)
  })
})

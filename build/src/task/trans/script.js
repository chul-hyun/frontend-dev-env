import gulp from 'gulp'

gulp.task('trans-script',() => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve()
    }, 1000)
  })
})

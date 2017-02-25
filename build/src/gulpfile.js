console.log('--------start----------');

import gulp from 'gulp'
gulp.task('default', ()=>{
  console.log('excute!!!')
  return new Promise((resolve) => {

    console.log('end!!!')
    setTimeout(resolve, 1000)
  })
});

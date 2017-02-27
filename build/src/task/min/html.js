/*
import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin'
import changed from 'gulp-changed';

import PATHS from '../../var/PATHS'
import config from '../../config'

let configWebMinHtml = config.web.min.html
let src              = PATHS.entry.html.glob
let dest             = PATHS.output.html.dir

if(configWebMinHtml){
  gulp.task('min-html', function() {
    gulp.src(src)
      .pipe(changed(dest))
      .pipe(htmlmin(configWebMinHtml))
      .pipe(gulp.dest(dest));
  })
}else {
  gulp.task('min-html', function() {
    gulp.src(src)
      .pipe(gulp.dest(dest));
  });
}
*/

import gulp from 'gulp'

gulp.task('min-html',() => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve()
    }, 1000)
  })
})

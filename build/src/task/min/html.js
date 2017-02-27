import { task, src, dest } from 'gulp';
import htmlmin from 'gulp-htmlmin'
import changed from 'gulp-changed';

import PATHS from '../../var/PATHS'
import env from '../env'

let srcFiles   = PATHS.entry.html.glob
let destFolder = PATHS.output.html.dir

/*
if(env.isDevelopment()){
  task('min-html', () => (
    src(srcFiles)
      .pipe(dest(destFolder))
  ))
}else {*/
  let config = {
    caseSensitive               : true,
    collapseBooleanAttributes   : true,
    collapseInlineTagWhitespace : true,
    collapseWhitespace          : true,
    conservativeCollapse        : true
  }

  task('min-html', () => (
    src(srcFiles)
      .pipe(changed(destFolder))
      .pipe(htmlmin(config))
      .pipe(dest(destFolder))
  ))
//}

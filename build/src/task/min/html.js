import { task, src, dest } from 'gulp';
import htmlmin from 'gulp-htmlmin'
import changed from 'gulp-changed';

import PATHS from '../../var/PATHS'
import env from '../env'

let files = PATHS.output.html.glob
let dir   = PATHS.output.html.dir


if(env.isDevelopment()){
  task('min-html', (cb) => cb())
}else {
  let config = {
    caseSensitive               : true,
    collapseBooleanAttributes   : true,
    collapseInlineTagWhitespace : true,
    collapseWhitespace          : true,
    conservativeCollapse        : true
  }

  task('min-html', () => src(files)
    .pipe(changed(dir))
    .pipe(htmlmin(config))
    .pipe(dest(dir))
  )
}

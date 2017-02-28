import { task, src, dest } from 'gulp';
import htmlmin from 'gulp-htmlmin'
import changed from 'gulp-changed';

import PATHS from '../../../var/PATHS'

let files = PATHS.output.html.glob
let dir   = PATHS.output.html.dir

let config = {
  caseSensitive               : true,
  collapseBooleanAttributes   : true,
  collapseInlineTagWhitespace : true,
  collapseWhitespace          : true,
  conservativeCollapse        : true
}

task('min-html-htmlmin', () => src(files)
  .pipe(changed(dir))
  .pipe(htmlmin(config))
  .pipe(dest(dir))
)

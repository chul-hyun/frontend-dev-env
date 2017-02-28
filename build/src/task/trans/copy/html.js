import { task, src, dest } from 'gulp'
import changed from 'gulp-changed';

import PATHS from '../../../var/PATHS'

let file = PATHS.entry.html.file
let dir  = PATHS.output.html.dir

task('trans-copy-html',() => src(file)
  .pipe(changed(dir))
  .pipe(dest(dir))
)

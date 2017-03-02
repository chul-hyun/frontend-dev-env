import { task, src, dest, series } from 'gulp'
import changed from 'gulp-changed'
import path from 'path'
import less from 'gulp-less'

import PATHS from '../../../var/PATHS'

let file = PATHS.entry.style.file
let dir = PATHS.output.style.dir

task('trans-less-style', () => src(file)
  .pipe(less({
    paths: [ ]
  }))
  .pipe(dest(dir));
})

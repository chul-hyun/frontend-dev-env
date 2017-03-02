import { task, src, dest } from 'gulp'
import changed from 'gulp-changed'

import babelify from './gulp-babelify'
import PATHS from '../../../../var/PATHS'
import defaultConfig from './defaultConfig'

let file = PATHS.entry.script.file
let dir  = PATHS.output.script.dir

let config = Object.assign({}, defaultConfig, {
  browserify : {
    debug : false
  }
})

task('trans-babelify-script-production', () => src(file)
  .pipe(changed(dir))
  .pipe(babelify(config))
  .pipe(dest(dir))
)

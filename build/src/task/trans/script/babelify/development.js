import { task, src, dest } from 'gulp'
import changed from 'gulp-changed'

import babelify from '../plugin/gulp-babelify'
import PATHS from '../../../../var/PATHS'
import defaultConfig from './defaultConfig'

let file = PATHS.entry.script.file
let dir  = PATHS.output.script.dir

let config = Object.assign({}, defaultConfig, {
  browserify : {
    debug : true
  }
})

task('trans-babelify-script-development', () => src(file)
  .pipe(changed(dir))
  .pipe(babelify(config))
  .pipe(dest(dir))
)

export default (taskName, {entry, output}, config) => {
  task(taskName, () => src(entry)
    .pipe(changed(output))
    .pipe(babelify(config))
    .pipe(dest(output))
  )
}

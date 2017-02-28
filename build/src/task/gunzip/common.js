import { task, src, dest } from 'gulp'
import gzip from 'gulp-gzip'

import PATHS from '../../var/PATHS'

export function createGzTask(type) {
  let output = PATHS.output[type]
  let files  = output.glob
  let dir    = output.dir

  task(`gz-${type}`, () => src(files)
    .pipe(gzip())
    .pipe(dest(dir))
  )
}

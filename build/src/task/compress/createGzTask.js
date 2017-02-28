import { task, src, dest } from 'gulp'
import gzip from 'gulp-gzip'

import PATHS from '../../../var/PATHS'

export default function createGzTask(type) {
  let output = PATHS.output[type]
  let files  = output.glob
  let dir    = output.dir

  task(`compress-${type}-gz`, () => src(files)
    .pipe(gzip())
    .pipe(dest(dir))
  )
}

import { task, src, dest } from 'gulp'
import uglify from 'gulp-uglify'

import PATHS from '../../../var/PATHS'

let script = PATHS.output.script
task('min-script-uglify', () => src(script.file)
  .pipe(uglify())
  .pipe(dest(script.dir))
)

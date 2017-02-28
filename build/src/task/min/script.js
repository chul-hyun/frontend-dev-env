import { task, src, dest } from 'gulp'
import uglify from 'gulp-uglify'

import PATHS from '../../var/PATHS'
import env from '../env'


if(env.isDevelopment()){
  task('min-script', (cb) => cb())
}else {
  let script = PATHS.output.script
  task('min-script', () => src(script.file)
    .pipe(uglify())
    .pipe(dest(script.dir))
  )
}

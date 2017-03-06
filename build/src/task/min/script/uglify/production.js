import { task, src, dest } from 'gulp'
import uglify from 'gulp-uglify'
import changed from 'gulp-changed'

export default function createGzTask(taskName, {output}) {
  let files = output.glob
  let dir   = output.dir

  task(taskName, () => src(files)
    .pipe(changed(dir))
    .pipe(uglify())
    .pipe(dest(dir))
  )
}

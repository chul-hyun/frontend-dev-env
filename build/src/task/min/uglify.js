import { task, src, dest } from 'gulp'
import uglify from 'gulp-uglify'
import changed from 'gulp-changed'
import path from 'path'

export default (taskName, paths, config) => {
  let dirDest = paths.dir.dest

  task(taskName, () => src(paths.file.src)
    .pipe(changed(dirDest))
    .pipe(uglify())
    .pipe(dest(dirDest))
  )
}

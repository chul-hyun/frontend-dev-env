import { task, src, dest } from 'gulp'
import changed from 'gulp-changed'
import less from 'gulp-less'

export default (taskName, paths, config) => {
  let dirDest = paths.dir.dest

  task(taskName, () => src(paths.file.src)
    .pipe(changed(dirDest))
    .pipe(less())
    .pipe(dest(dirDest))
  )
}

import { task, src, dest } from 'gulp'
import changed from 'gulp-changed'
import babelify from '../../plugin/gulp-babelify'

export default (taskName, paths, config) => {
  let dirDest = paths.dir.dest

  task(taskName, () => src(paths.file.src)
    .pipe(changed(dirDest))
    .pipe(babelify(config))
    .pipe(dest(dirDest))
  )
}

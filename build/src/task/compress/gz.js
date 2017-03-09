import { task, src, dest } from 'gulp'
import gzip from 'gulp-gzip'

export default (taskName, paths, config) => {
  task(taskName, () => src(paths.src.file)
    .pipe(gzip())
    .pipe(dest(paths.dest.dir))
  )
}

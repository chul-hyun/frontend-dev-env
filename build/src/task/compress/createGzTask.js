import { task, src, dest } from 'gulp'
import gzip from 'gulp-gzip'

export default (taskName, {entry, output}) => {
  task(taskName, () => src(entry)
    .pipe(gzip())
    .pipe(dest(output))
  )
}

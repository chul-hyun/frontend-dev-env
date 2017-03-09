import { task, src, dest } from 'gulp'
import changed from 'gulp-changed'
import less from 'gulp-less'

export default (taskName, {entry, output}, config) => {
  task(taskName, () => src(entry)
    .pipe(changed(output))
    .pipe(less())
    .pipe(dest(output))
  )
}

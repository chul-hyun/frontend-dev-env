import { task, src, dest } from 'gulp'
import uglify from 'gulp-uglify'
import changed from 'gulp-changed'
import path from 'path'

export default (taskName, {entry, output}) => {
  task(taskName, () => src(entry)
    .pipe(changed(output))
    .pipe(uglify())
    .pipe(dest(output))
  )
}

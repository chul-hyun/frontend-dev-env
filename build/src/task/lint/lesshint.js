import { task, src, dest, parallel } from 'gulp'
import path from 'path'
import lesshint from 'gulp-lesshint'

export default (taskName, paths, config) => {
  task(taskName, () => src(paths.file.src)
    .pipe(lesshint())
    .pipe(lesshint.reporter('stylish'))
    .pipe(lesshint.failOnError())
  )
}

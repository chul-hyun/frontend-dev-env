import { task, src, dest, parallel } from 'gulp'
import path from 'path'
import eslint from 'gulp-eslint'

export default (taskName, paths, config) => {
  task(taskName, () => src(paths.file.src)
    .pipe(eslint())
    .pipe(eslint.format('codeframe'))
    .pipe(eslint.failAfterError())
  )
}

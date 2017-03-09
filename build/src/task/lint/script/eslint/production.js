import { task, src, dest, parallel } from 'gulp'
import path from 'path';
import eslint from 'gulp-eslint'

export default (taskName, {entry}, config) => {
  let copyTaskName = `${taskName}Copy`

  task(copyTaskName, () => src(config.configFile)
    .pipe(dest(path.dirname(entry)))
  )

  task(taskName, parallel(copyTaskName), () =>
    src(entry)
      .pipe(eslint(config))
      .pipe(eslint.format('codeframe'))
      .pipe(eslint.failAfterError())
  )
}

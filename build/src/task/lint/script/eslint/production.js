import { task, src, dest, parallel } from 'gulp'
import eslint from 'gulp-eslint'

export default function createGzTask(taskName, {entry, config}) {
  let configFile = config.eslintrc
  let copyTaskName = `${taskName}Copy`

  task(copyTaskName, () => src(configFile)
    .pipe(dest(entry.dir))
  )

  task(taskName, parallel(copyTaskName), () =>
    src([entry.glob])
      .pipe(eslint({ configFile }))
      .pipe(eslint.format('codeframe'))
      .pipe(eslint.failAfterError())
  )
}

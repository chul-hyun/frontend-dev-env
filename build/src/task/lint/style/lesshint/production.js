import { task, src, dest, parallel } from 'gulp'
import path from 'path'
import lesshint from 'gulp-lesshint'

export default (taskName, {entry}, config) => {
  let copyTaskName = `${taskName}Copy`

  task(copyTaskName, () => src(config.configPath)
    .pipe(dest(path.dirname(entry)))
  )

  task(taskName, parallel(copyTaskName), () =>
    src(entry)
      .pipe(lesshint(config))
      .pipe(lesshint.reporter('stylish'))
      .pipe(lesshint.failOnError())
  )
}

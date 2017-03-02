import { task, src, dest, parallel } from 'gulp'
import lesshint from 'gulp-lesshint';

export default function createGzTask(taskName, entry, output, option) {
  let configPath = option.lesshintrc
  let copyTaskName = `${taskName}Copy`

  task(copyTaskName, () => src(configPath)
    .pipe(dest(PATHS.entry.common.dir))
  )

  task(taskName, parallel(copyTaskName), () =>
    src(PATHS.entry.style.glob)
      .pipe(lesshint({ configPath }))
      .pipe(lesshint.reporter('stylish'))
      .pipe(lesshint.failOnError())
  )
}

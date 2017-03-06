import { task, src, dest, parallel } from 'gulp'
import lesshint from 'gulp-lesshint';

export default function createGzTask(taskName, {entry, config}) {
  let copyTaskName = `${taskName}Copy`

  task(copyTaskName, () => src(config.configPath)
    .pipe(dest(PATHS.entry.common.dir))
  )

  task(taskName, parallel(copyTaskName), () =>
    src(PATHS.entry.style.glob)
      .pipe(lesshint(config))
      .pipe(lesshint.reporter('stylish'))
      .pipe(lesshint.failOnError())
  )
}

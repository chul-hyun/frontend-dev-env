import { task, src } from 'gulp'
import html5Lint from 'gulp-html5-lint';

export default (taskName, paths, config) => {
  task(taskName, () => src(paths.file.src)
    .pipe(html5Lint())
  )
}

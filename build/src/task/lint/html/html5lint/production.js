import { task, src } from 'gulp'
import html5Lint from 'gulp-html5-lint';

export default (taskName, {entry}) => {
  task(taskName, () => src(entry)
    .pipe(html5Lint())
  )
}

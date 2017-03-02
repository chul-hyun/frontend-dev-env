import { task, src } from 'gulp'
import html5Lint from 'gulp-html5-lint';

export default function createGzTask(taskName, entry, output, option) {
  task(taskName, () => src([entry.glob])
    .pipe(html5Lint())
  )
}

import { task, src } from 'gulp'
import html5Lint from 'gulp-html5-lint';

import PATHS from '../../../var/PATHS'

task('lint-html-html5lint', () => src([PATHS.entry.html.glob])
  .pipe(html5Lint())
)

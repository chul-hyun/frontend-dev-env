import { task, src, dest, parallel } from 'gulp'
import lesshint from 'gulp-lesshint';

import PATHS from '../../../var/PATHS'

let configPath = PATHS.build.config.web.lesshintrc

task('lint-style-lesshint-copy', () => src(configPath)
  .pipe(dest(PATHS.entry.common.dir))
)

gulp.task('lint-style-lesshint', parallel('lint-style-lesshint-copy'), () =>
  gulp.src(PATHS.entry.style.glob)
    .pipe(lesshint({ configPath }))
    .pipe(lesshint.reporter('stylish'))
    .pipe(lesshint.failOnError())
)

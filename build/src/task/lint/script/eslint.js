import { task, src, dest, parallel } from 'gulp'
import eslint from 'gulp-eslint'
import changed from 'gulp-changed'
import path from 'path'

import PATHS from '../../../var/PATHS'

let configFile = PATHS.build.config.web.eslintrc

task('lint-script-eslint-copy', () => src(configFile)
  .pipe(dest(PATHS.entry.common.dir))
)

task('lint-script-eslint', parallel('lint-script-eslint-copy'), () =>
  src([PATHS.entry.script.glob])
    .pipe(eslint({ configFile }))
    .pipe(eslint.format('codeframe'))
    .pipe(eslint.failAfterError())
)

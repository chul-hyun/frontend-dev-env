import { task, src, dest, parallel } from 'gulp'
import eslint from 'gulp-eslint'
import changed from 'gulp-changed'
import path from 'path'

import PATHS from '../../var/PATHS'

let configfile = PATHS.build.config.web.eslintrc

task('copy-lint-script', () => src(configfile)
  .pipe(dest(PATHS.entry.common.dir))
)

task('lint-script', parallel('copy-lint-script'), () =>
  src([PATHS.entry.script.glob])
    .pipe(eslint({
      configFile: configfile
    }))
    .pipe(eslint.format('codeframe'))
    .pipe(eslint.failAfterError())
)

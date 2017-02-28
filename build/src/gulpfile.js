import gulp, { series, parallel, task } from 'gulp'
import './task'

task('html',
  series(
    'lint-html',
    'trans-html',
    'min-html',
    'gz-html'
  )
)

task('script',
  series(
    'lint-script',
    'trans-script',
    'min-script',
    'gz-script'
  )
)

task('style',
  series(
    'lint-style',
    'trans-style',
    'min-style',
    'gz-style'
  )
)

task('default', series('clean', parallel('html', 'script', 'style'), 'server'));

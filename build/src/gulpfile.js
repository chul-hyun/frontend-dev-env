import gulp, { series, parallel, task } from 'gulp'
import './task'

task('html',
  series(
    'lint-html5lint-html',
    'trans-copy-html',
    'min-htmlmin-html',
    'compress-gz-html'
  )
)

task('script',
  series(
    'lint-eslint-script',
    'trans-babelify-script',
    'min-uglify-script',
    'compress-gz-script'
  )
)

task('style',
  series(
    'lint-lesshint-style',
    'trans-less-style',
    'min-cssnano-style',
    'compress-gz-style'
  )
)

task('build', parallel('html', 'script', 'style'))
task('default', series('clean', 'build' , 'server'));

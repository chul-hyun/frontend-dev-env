import { task } from 'gulp'

import browserSync from '../../../var/browserSync'
import defaultConfig from './defaultConfig'

let config = Object.assign({}, defaultConfig, {
  codeSync  : true,
  open      : false,
  ghostMode : {
    clicks : true,
    forms  : true,
    scroll : true
  },
  reloadOnRestart : true,
  reloadDebounce  : 1000
})

task('server-browserSync-development',(cb) =>
  browserSync.init(config, () => cb())
)

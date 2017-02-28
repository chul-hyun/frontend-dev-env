import { task } from 'gulp'

import browserSync from '../../../var/browserSync'
import defaultConfig from './defaultConfig'

let config = Object.assign({}, defaultConfig, {
  ui: false,
  port: 80,
  codeSync: false,
  open: false,
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false
  },
  reloadOnRestart: false,
  reloadDebounce: 0
})

task('server-browserSync-production',(cb) =>
  browserSync.init(config, () => cb())
)

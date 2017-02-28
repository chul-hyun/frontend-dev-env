import { task } from 'gulp'
import gzipStatic from 'connect-gzip-static';
import path from 'path';

import browserSync from '../../var/browserSync'
import PATHS from '../../var/PATHS'
import env from '../env'

const baseDir = path.relative(PATHS.build.output.dir, PATHS.output.common.dir)

let defaultConfig = {
  server: {
    baseDir
  },
  callbacks: {
      ready: (err, bs) => {
          bs.addMiddleware("*", gzipStatic(baseDir), {
              override: true
          });
      }
  }
}

if(env.isDevelopment()){
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

  task('server',(cb) =>
    browserSync.init(config, () => cb())
  )
}else {
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

  task('server',(cb) =>
    browserSync.init(config, (err, bs) => cb())
  )
}

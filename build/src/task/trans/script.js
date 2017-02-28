import { task, src, dest, series } from 'gulp'
import changed from 'gulp-changed'
import path from 'path'

import source from 'vinyl-source-stream';
import browserify from 'browserify';
import through from 'through2';

import {path as appRoot} from 'app-root-path'

import PATHS from '../../var/PATHS'
import env from '../env'

let file           = PATHS.entry.script.file
let dir            = PATHS.output.script.dir
let outputFile     = PATHS.output.script.file
let outputFilename = PATHS.output.script.filename
let polyfill       = path.join(appRoot, 'node_modules/babel-polyfill/dist/polyfill.js')

let defaultConfig = {
  browserify : {

  },
  babelify : {
    extends : PATHS.build.config.web.babelrc
  }
}


if(env.isDevelopment()){
  let config = Object.assign({}, defaultConfig, {
    browserify : {
      debug     : true
    }
  })

  task('trans-script', () => src(file)
    .pipe(changed(dir))
    .pipe(babelify(config))
    .pipe(dest(dir))
  )
}else {
  let config = Object.assign({}, defaultConfig, {
    browserify : {
      debug     : false
    }
  })

  task('trans-script', () => src(file)
    .pipe(changed(dir))
    .pipe(babelify(config))
    .pipe(dest(dir))
  )
}

function babelify(config){
  return through.obj(function(file, encoding, cb) {
    browserify(file.path, config.browserify)
      .transform('babelify', config.babelify)
      .bundle()
      .pipe(source(path.basename(file.path)))
      .pipe(through.obj((browserFile, encoding, callback) => {
        cb(null, browserFile);
        callback(null, browserFile);
      }))
  })
}

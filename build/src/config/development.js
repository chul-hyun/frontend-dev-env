import {path as appRoot} from 'app-root-path';
import path from 'path';
import PATHS from '../var/PATHS';
import gzipStatic from 'connect-gzip-static';

const relativeBaseDir = path.relative(PATHS.build.output.dir, PATHS.output.common.dir)

export default {
  browserSync: {
    server: {
      baseDir: relativeBaseDir
    },
    callbacks: {
      ready: (err, bs) => {
        bs.addMiddleware('*', gzipStatic(relativeBaseDir), {
          override: true
        });
      }
    },
    codeSync  : true,
    open      : false,
    ghostMode : {
      clicks : true,
      forms  : true,
      scroll : true
    },
    reloadOnRestart : true,
    reloadDebounce  : 1000
  },
  browserify: {
    debug     : true
  },
  babelify:{
    extends    : PATHS.config.node.babel
  },
  htmlmin  : false,
  uglifyJS : false
}

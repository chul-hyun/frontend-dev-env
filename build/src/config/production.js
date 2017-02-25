import {path as appRoot} from 'app-root-path';
import path from 'path';
import PATHS from '../var/PATHS';
import gzipStatic from 'connect-gzip-static';

const relativeBaseDir = path.relative(appRoot, PATHS.output.common.dir)

export default {
  browserSync : {
    server: {
      baseDir : PATHS.output.common.dir
    },
    callbacks: {
        ready: (err, bs) => {
            bs.addMiddleware("*", gzipStatic(relativeBaseDir), {
                override: true
            });
        }
    },
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
  },
  browserify: {
    debug     : false
  },
  babelify:{
    extends    : PATHS.config.node.babel
  },
  htmlmin : {
    caseSensitive: true,
    collapseBooleanAttributes : true,
    collapseInlineTagWhitespace : true,
    collapseWhitespace : true,
    conservativeCollapse : true
  },
  uglifyJS: true
}

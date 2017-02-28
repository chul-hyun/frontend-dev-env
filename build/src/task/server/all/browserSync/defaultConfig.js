import gzipStatic from 'connect-gzip-static';
import path from 'path';

import PATHS from '../../../var/PATHS'

const baseDir = path.relative(PATHS.build.output.dir, PATHS.output.common.dir)

export default {
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

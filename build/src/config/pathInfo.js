import {path as appRoot} from 'app-root-path'
import path from 'path'
import gulp from 'gulp'
import _ from 'lodash'

const dir = {}
dir.app  = path.join(appRoot, 'app')
dir.dist = path.join(dir.app, 'dist')
dir.src  = path.join(dir.app, 'src')

const glob = {
  all: '{.*,*}',
  src: {
    script : '*.js',
    html   : '*.html',
    style  : '*.less'
  },
  dest: {
    script : '*.js',
    html   : '*.html',
    style  : '*.css'
  }
}

glob.src.code = createGlobs(_.values(glob.src))
glob.dest.code = createGlobs(_.values(glob.dest))

function createGlobs(...globs){
  return `{${globs.join(',')}}`
}

const defaultPathInfo = {
  file: {
    src  : path.join(dir.src, '**', glob.all),
    dest : path.join(dir.dist, '**', glob.all)
  },
  dir: {
    src  : dir.src,
    dest : dir.dist
  }
}

const pathInfo = {
  all: {},
  code: {
    file: {
      src  : path.join(dir.src, '**', glob.src.code),
      dest : path.join(dir.dist, '**', glob.dest.code)
    }
  },
  script: {
    file: {
      src  : path.join(dir.src, '**', glob.src.script),
      dest : path.join(dir.dist, '**', glob.dest.script)
    }
  },
  html: {
    file: {
      src  : path.join(dir.src, '**', glob.src.html),
      dest : path.join(dir.dist, '**', glob.dest.html)
    }
  },
  style: {
    file: {
      src  : path.join(dir.src, '**', glob.src.style),
      dest : path.join(dir.dist, '**', glob.dest.style)
    }
  }
}

for(let key in pathInfo){
  pathInfo[key] = Object.assign({}, defaultPathInfo, pathInfo[key])
}

export default pathInfo

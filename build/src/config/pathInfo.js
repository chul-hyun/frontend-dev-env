import path as appRoot from 'app-root-path'
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
  return `${{globs.join(',')}}`
}

const default_pathinfo = {
  file: {
    src  : path.join(dir.src, '**', glob.all),
    dest : path.join(dir.dist, '**', glob.all)
  },
  dir: {
    src  : dir.src
    dest : dir.dist
  }
}

const pathinfo = {
  all: {},
  code: {
    file: {
      src  : path.join(dir.src, '**', glob.src.code),
      dest : path.join(dir.dist, '**', destCodeFileGlob)
    }
  },
  script: {
    file: {
      src  : path.join(dir.src, '**', jsFileGlob),
      dest : path.join(dir.dist, '**', jsFileGlob)
    }
  },
  html: {
    file: {
      src  : path.join(dir.src, '**', htmlFileGlob),
      dest : path.join(dir.dist, '**', htmlFileGlob)
    }
  },
  style: {
    file: {
      src  : path.join(dir.src, '**', lessFileGlob),
      dest : path.join(dir.dist, '**', cssFileGlob)
    }
  }
}

for(let key in pathinfo){
  pathinfo[key] = Object.assign({}, default_pathinfo, pathinfo[key])
}

export default pathinfo

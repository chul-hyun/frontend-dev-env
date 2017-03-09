const appRoot = require('app-root-path').path
const path = require('path')

const build      = path.join(appRoot, 'build')
const dist       = path.join(build, 'dist')
const src        = path.join(build, 'src')
const taskCreate = path.join(src, 'taskCreate')

const node_build = path.join(appRoot, 'node_build')

const allFileGlob = '{.*,*}'
const jsFileGlob = '*.js'


const clean = {
  src : path.join(dist, '**', allFileGlob)
}

const mkdir = {
  src : dist
}

const copy = {
  src  : path.join(dist, '**', `{.*,!(${jsFileGlob})}`),
  dest : dist
}

const babel = {
  src         : path.join(dist, '**', jsFileGlob),
  babelrcFile : path.join(node_build, '.babelrc.json'),
  dest        : dist
}

const createIndex = {
  src       : path.join(taskCreate, '**', jsFileGlob),
  indexFile : path.join(taskCreate, 'index.js'),
  dest      : taskCreate
}

const watch = {
  src : path.join(src, '**', allFileGlob)
}


module.exports = {
  clean,
  mkdir,
  copy,
  babel,
  createIndex,
  watch
}

import path from 'path'
import {path as appRoot} from 'app-root-path'

let common = {
  dir  : path.join(appRoot, 'app'),
  name : 'index',
  ext : '.*'
}

let entry = {}

entry.common = createExtendPathObj(extend(common, {
  dir : path.join(common.dir, 'src')
}))
entry.script = createExtendPathObj(extend(entry.common, {
  ext : '.js'
}))
entry.style  = createExtendPathObj(extend(entry.common, {
  ext : '.less'
}))
entry.html   = createExtendPathObj(extend(entry.common, {
  ext : '.html'
}))


let output = {}

output.common = createExtendPathObj(extend(common, {
  dir : path.join(common.dir, 'dist')
}))
output.script = createExtendPathObj(extend(output.common, {
  ext : '.js'
}))
output.style  = createExtendPathObj(extend(output.common, {
  ext : '.css'
}))
output.html   = createExtendPathObj(extend(output.common, {
  ext : '.html'
}))

let build = {}
build.entry = createExtendPathObj({
  dir  : path.join(appRoot, 'build', 'src'),
  name : 'gulpfile',
  ext  : '.js'
})
build.output = createExtendPathObj({
  dir  : path.join(appRoot, 'build', 'dist'),
  name : 'gulpfile',
  ext  : '.js'
})

let config = {}

config.root = path.join(build.output.dir, 'config'),

config = extend(config, {
  web : {
    gunzip: {
      html : '',
      script: '',
      style: ''
    },
    lint: {
      html : '',
      script: path.join(config.root, 'web', '.eslintrc.json'),
      style: ''
    },
    min: {
      html : '',
      script: '',
      style: ''
    },
    server: {
      html : '',
      script: '',
      style: ''
    },
    trans: {
      html : '',
      script: '',
      style: ''
    },
    watch: {
      html : '',
      script: '',
      style: ''
    },
  }
})

function createExtendPathObj(pathObj){
  let extendPathObj      = {}

  extendPathObj          = clone(pathObj)
  extendPathObj.file     = path.format(extendPathObj)
  extendPathObj.filename = getBasename(extendPathObj)
  extendPathObj.glob     = getGlob(extendPathObj)

  return extendPathObj;
}

function getBasename(extendPathObj){
  return path.basename(extendPathObj.file)
}

function getGlob(extendPathObj){
  return path.join(extendPathObj.dir, '**', `*${extendPathObj.ext}`)
}

function extend(obj1, obj2){
  return Object.assign({}, obj1, obj2)
}

function clone(obj){
  return Object.assign({}, obj)
}


export default {
  appRoot,
  common,
  output,
  entry,
  config,
  build
}

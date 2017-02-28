import path from 'path'
import {path as appRoot} from 'app-root-path'

let common = {
  dir  : path.join(appRoot, 'app'),
  name : 'index',
  ext : '.*'
}

let entry = {}

entry.all = createExtendPathObj(extend(common, {
  dir : path.join(common.dir, 'src')
}))
entry.script = createExtendPathObj(extend(entry.all, {
  ext : '.js'
}))
entry.style  = createExtendPathObj(extend(entry.all, {
  ext : '.less'
}))
entry.html   = createExtendPathObj(extend(entry.all, {
  ext : '.html'
}))


let output = {}

output.all = createExtendPathObj(extend(common, {
  dir : path.join(common.dir, 'dist')
}))
output.script = createExtendPathObj(extend(output.all, {
  ext : '.js'
}))
output.style  = createExtendPathObj(extend(output.all, {
  ext : '.css'
}))
output.html   = createExtendPathObj(extend(output.all, {
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

let bc = build.config = {}
bc.root = path.join(build.output.dir, 'config')

let bcc = bc.all = {}
bcc.root = path.join(bc.root, 'all')
bcc.eslintrc = path.join(bcc.root, '.eslintrc')
bcc.babelrc = path.join(bcc.root, '.babelrc')

let bcn = bc.node = {}
bcn.root = path.join(bc.root, 'node')
bcn.eslintrc = path.join(bcn.root, '.eslintrc')
bcn.babelrc = path.join(bcn.root, '.babelrc')

let bcw = bc.web = {}
bcw.root = path.join(bc.root, 'web')
bcw.eslintrc = path.join(bcw.root, '.eslintrc')
bcw.babelrc = path.join(bcw.root, '.babelrc')
bcw.lesshintrc = path.join(bcw.root, '.lesshintrc')


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

export {
  appRoot,
  common,
  output,
  entry,
  build
}

export default {
  appRoot,
  common,
  output,
  entry,
  build
}

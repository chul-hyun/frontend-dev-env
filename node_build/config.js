const appRoot = require('app-root-path').path
const path = require('path')

let dir = {}
dir.node_build = path.join(appRoot, 'node_build')
dir.build = path.join(appRoot, 'build')
dir.config = path.join(appRoot, 'config')
dir.dist = path.join(dir.build, 'dist')
dir.src = path.join(dir.build, 'src')
dir.task = path.join(dir.src, 'task')

let file = {}
file.babelrc = path.join(dir.node_build, '.babelrc.json')
file.taskIndex = path.join(dir.task, 'index.js')

let glob = {}

glob.src = {}
glob.src.script = path.join(dir.src, '**', '*.js')
glob.src.etc = path.join(dir.src, '**', '+(*|.*)')
glob.src.noscript = path.join(dir.src, '**', '+(!(*.js)|.*)')

glob.dir = {}
glob.dir.etc = path.join(dir.dist, '**', '+(*|.*)')

glob.node_build = {}
glob.node_build.script = path.join(dir.node_build, '**', '*.js')
glob.node_build.etc = path.join(dir.node_build, '**', '+(*|.*)')
glob.node_build.noscript = path.join(dir.node_build, '**', '+(!(*.js)|.*)')

module.exports =  {
  appRoot,
  dir,
  file,
  glob
}

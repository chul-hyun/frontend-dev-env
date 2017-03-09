const through = require('through2')
const spawn = require('child_process').spawn
const gutil = require('gulp-util');

let execInfoStoarage = {};

const execInfoDefault = {
  p: false,
  task: 'default'
}

const configDefault = {
  task: execInfoDefault.task,
  mode: 'start'
}

const modes = [start, stop]

function getExec(execInfoKey){
  if(!execInfoStoarage.hasOwnProperty(execInfoKey)){
    execInfoStoarage[execInfoKey] = Object.assign({}, execInfoDefault)
  }
  return execInfoStoarage[execInfoKey]
}

function log(text){
  gutil.log('gulpExec', text);
}

function start(execInfo, cb) {
  let p        = execInfo.p
  let gulpfile = execInfo.gulpfile
  let task     = execInfo.task

  if(p) {
    p.kill();
  }

  log(`------ gulp --gulpfile "${gulpfile}" ${task} ------start`);
  p = spawn(
    'gulp.cmd',
    ['--gulpfile', gulpfile, task],
    {
      stdio: 'inherit'
  });

  cb()
}

function stop(execInfo, cb) {
  let p        = execInfo.p
  let gulpfile = execInfo.gulpfile
  let task     = execInfo.task

  if(p) {
    llog(`------ gulp --gulpfile "${gulpfile}" ${task} ------stop`);
    p.kill();
    p = false;
  }

  cb()
}

module.exports = function(config){
  const config    = Object.assign({}, configDefault, config)

  function bufferContents(file, encoding, cb) {
    const gulpfile    = file.path
    const task        = config.task
    const mode        = config.mode
    const execInfoKey = `${gulpfile}_${task}`

    let execInfo = getExec(execInfoKey)

    modes[mode](execInfo, cb)
  }

  return through.obj(bufferContents)
}

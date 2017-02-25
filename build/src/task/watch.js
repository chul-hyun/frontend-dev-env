import gulp from 'gulp';
import path from 'path';

import PATHS from '../var/PATHS'
import browserSync from '../var/browserSync';
import config from '../config'

gulp.task('watch', (done) => {
  let entry  = PATHS.entry
  let output = PATHS.output
  taskWatch(entry.script, ['esscript'])
  taskWatch(entry.html, ['html'])

  reloadWatch(output.script)
  reloadWatch(output.html)
})

function taskWatch(format, tasks){
  gulp.watch(files(format), tasks)
    .on('change', notifyChangeFile)
}

function reloadWatch(format){
  gulp.watch(files(format))
    .on('change', reload)
}

function notifyChangeFile(event){
  browserSync.notify('File ' + path.basename(event.path) + ' was ' + event.type);
}

function reload(event){
  browserSync.reload(event.path)
}

function files(format){
  return`${format.dir}/**/*${format.ext}`
}

import { task, watch, series } from 'gulp';
import path from 'path';

import PATHS from '../../var/PATHS'
import browserSync from '../../var/browserSync';

export default function createWatchTask(type){
  task(`watch-${type}`, () => {
    let entryFiles  = PATHS.entry[type]glob
    let outputFiles = PATHS.output[type]glob
    taskWatch(entryFiles, type)
    reloadWatch(outputFiles)
  })
}

function taskWatch(entryFiles, tasks){
  watch(entryFiles, series(tasks))
    .on('change', notifyChangeFile)
}

function reloadWatch(outputFiles){
  gulp.watch(outputFiles)
    .on('change', reload)
}

function notifyChangeFile(event){
  browserSync.notify('File ' + path.basename(event.path) + ' was ' + event.type);
}

function reload(event){
  browserSync.reload(event.path)
}

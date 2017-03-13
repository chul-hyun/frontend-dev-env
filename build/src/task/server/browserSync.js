import { task } from 'gulp';

export default (taskName, paths, config) => {
  task(taskName, (cb) =>
    config.bs.init(config.config, () => cb())
  )
}

//@TODO config.browserSync
/*
import browserSync from 'browser-sync';

export default browserSync.create()

 */

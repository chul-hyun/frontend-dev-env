export default (taskName, paths, config) => {
  task(taskName, (cb) =>
    browserSync.init(config, () => cb())
  )
}

//@TODO config.browserSync
/*
import browserSync from 'browser-sync';

export default browserSync.create()

 */

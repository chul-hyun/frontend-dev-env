import { task, watch } from 'gulp';

export default (taskName, paths, config) => {
  task(taskName, () => {
    watch(paths.file.src, config.srcTask)
      .on('change', config.onSrcChange)

    watch(paths.file.dest, config.destTask)
      .on('change', config.onDestChange)
  })
}

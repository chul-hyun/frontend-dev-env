import { task } from 'gulp'
import del from 'del';

export default (taskName, paths, config) => {
  task(taskName, () =>
    del(paths.file.dest , { force: true })
  )
}

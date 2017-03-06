import { task } from 'gulp'
import del from 'del';

// taskName, {entry, output, config}
export default (taskName, {output}) => {
  task(taskName, () =>
    del(output.glob , { force: true })
  )
}

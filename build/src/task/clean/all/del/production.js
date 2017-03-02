import { task } from 'gulp'
import del from 'del';

export default (taskName, entry, output) => {
  task(taskName, () =>
    del(output.glob , { force: true })
  )
}

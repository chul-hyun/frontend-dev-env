import { task } from 'gulp'
import del from 'del';

// taskName, {entry, output}, config
export default (taskName, {entry}) => {
  task(taskName, () =>
    del(entry , { force: true })
  )
}

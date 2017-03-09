import { task, src, dest } from 'gulp'
import changed from 'gulp-changed';

export default (taskName, {entry, output}) => {
  task(taskName, () => src(entry)
    .pipe(changed(output))
    .pipe(dest(output))
  )
}

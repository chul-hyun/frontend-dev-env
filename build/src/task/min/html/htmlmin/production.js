import { task, src, dest } from 'gulp'
import path from 'path'
import htmlmin from 'gulp-htmlmin'
import changed from 'gulp-changed'

/*
let config = {
  caseSensitive               : true,
  collapseBooleanAttributes   : true,
  collapseInlineTagWhitespace : true,
  collapseWhitespace          : true,
  conservativeCollapse        : true
}
*/

export default (taskName, {entry}, config) => {
  let dir   = path.dirname(entry)

  task(taskName, () => src(entry)
    .pipe(changed(dir))
    .pipe(htmlmin(config))
    .pipe(dest(dir))
  )
}

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

export default (taskName, paths, config) => {
  let dirDest = paths.dir.dest

  task(taskName, () => src(paths.file.src)
    .pipe(changed(dirDest))
    .pipe(htmlmin(config))
    .pipe(dest(dirDest))
  )
}

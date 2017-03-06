import { task, src, dest } from 'gulp'
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

export default function createGzTask(taskName, {output, config, api}) {
  let files = output.glob
  let dir   = output.dir

  task(taskName, () => src(files)
    .pipe(changed(dir))
    .pipe(htmlmin(config))
    .pipe(dest(dir))
  )
}

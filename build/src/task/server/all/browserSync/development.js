import { task } from 'gulp'

import browserSync from '../../../../var/browserSync' // <-- watch와 합쳐야 모듈화가 되려나? 쪼갤수 없는 건가?
// browserSync 이 변수를 어찌하지.. global은 안좋은데..
import defaultConfig from './defaultConfig'

let config = Object.assign({}, defaultConfig, {
  codeSync  : true,
  open      : false,
  ghostMode : {
    clicks : true,
    forms  : true,
    scroll : true
  },
  reloadOnRestart : true,
  reloadDebounce  : 1000
})

export default function createGzTask(taskName, entry, output, option) {
  task(taskName, (cb) =>
    browserSync.init(config, () => cb())
  )
}

import { series, parallel, task } from 'gulp'
import _ from 'lodash'

import taskRegister from './task'
import env from './env'

const option = {

}

let taskAPI = taskRegister.init()
taskRegister.create()

const getTaskname = _.curry((fileType, category, mod) => {
  return `${category}-${fileType}-${mod}-${env.current}`
})

const getTaskname

let config = {
  html   : ['html5lint', 'copy', 'htmlmin', 'gz'],
  script : ['eslint', 'babelify', 'uglify', 'gz'],
  style  : ['lesshint', 'less', 'cssnano', 'gz']
}

function createTask(config){
  for(let fileType in config){
    let getTaskname = getTaskname(fileType);
    task(fileType,
      series(
        getTaskname('lint', config[0]),
        getTaskname('trans', config[1]),
        getTaskname('min', config[2]),
        getTaskname('compress', config[3])
      )
    )
  }
}

task('build', parallel('html', 'script', 'style'))
task('default', series('clean', 'build' , 'server'));

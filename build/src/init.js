import task from './task'

const option = {

}

let taskPlan = {
  html   : ['html5lint', 'copy', 'htmlmin', 'gz'],
  script : ['eslint', 'babelify', 'uglify', 'gz'],
  style  : ['lesshint', 'less', 'cssnano', 'gz']
}


task.init(option)
createTask(taskPlan)

function createTask(config){
  const getTaskname = _.curry((fileType, category, mod) => {
    return `${category}-${fileType}-${mod}-${env.current}`
  })

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

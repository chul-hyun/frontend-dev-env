//@TODO env에 따라 task 순서와 각각의 task설정이 바뀜.

//@TODO performance환경 - dev환경 -  pro환경 순으로 extend 됨.
//@TODO config와 task순서가 extend 됨.
//@TODO config의 extend는 key값의 얉은복사. (동일 key 존재시 대체)
//@TODO task순서의 extend는 task명의 얇은복사. (동일 task명 존재시 대체)

//@TODO 카테고리가 같아도 사용모듈 및 파일종류마다 다른 옵션을 취해야됨.ㅋㅋㅋㅋㅋㅋㅋ
//@TODO 여러개의 파일종류를 한번에 지정 가능해야됨.(html, css ...)
//@TODO 공유되는 변수 (server변수)같은 경우에도 config로 전달.


//@TODO custom taskName 등록도 가능하게.
import priority from './priority'

import pathInfo from './pathInfo'

import path from 'path';

import gulp from 'gulp';

import _ from 'lodash'

let configs = getConfigs()

let configObj = getConfigMerge(configs)

let configList = getConfigToList(configObj)

registTasks(configList)

runTaskDefine(configs)

function getConfigs(){
  return priority.map((envName) =>
    require(path.resolve(__dirname, 'env', envName)).default.tasks
  )
}

function getConfigMerge(configs){
  return _.merge.apply(_, configs)
}

function getConfigToList(configObj){
  let configList = []

  for(let category in configObj){
    let moduleNames = configObj[category]
    for(let moduleName in moduleNames){
      let fileTypes = moduleNames[moduleName]
      for(let fileType in fileTypes){
        let taskConfig = fileTypes[fileType]
        configList.push({
          category,
          moduleName,
          fileType,
          taskConfig,
          taskName   : `${category}-${moduleName}-${fileType}`,
          paths      : pathInfo[fileType],
          modulePath : path.resolve(__dirname, '..', 'task', category, moduleName)
        })
      }
    }
  }

  return configList
}

function registTasks(configList){
  configList.forEach(({
    category,
    moduleName,
    taskConfig,
    taskName,
    paths,
    modulePath
  }) => {
    console.log('taskName', taskName);
    require(modulePath).default(taskName, paths, taskConfig)
  })

  let autoRegistTasks = {}

  configList.forEach(({
    category,
    moduleName,
    fileType,
    taskConfig,
    taskName,
    paths,
    modulePath
  }) => {
    autoRegistTasks[category] | autoRegistTasks[category] = []
    autoRegistTasks[fileType] | autoRegistTasks[fileType] = []
    autoRegistTasks[category].push(taskName)
    autoRegistTasks[fileType].push(taskName)
  }

  for(let taskName in autoRegistTasks){
    gulp.task(taskName, gulp.series.apply(gulp, autoRegistTasks[taskName])
  }
}

function runTaskDefine(configs){
  console.log(configs);
  configs.forEach((config) => {

    if(_.isFunction(config.taskDefine)){
      config.taskDefine(gulp)
    }
  })
}

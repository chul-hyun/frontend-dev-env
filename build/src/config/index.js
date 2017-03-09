//@TODO production과 development와 performance의 extend 코드 <- node_build에?


//@TODO env에 따라 task 순서와 각각의 task설정이 바뀜.

//@TODO performance환경 - dev환경 -  pro환경 순으로 extend 됨.
//@TODO config와 task순서가 extend 됨.
//@TODO config의 extend는 key값의 얉은복사. (동일 key 존재시 대체)
//@TODO task순서의 extend는 task명의 얇은복사. (동일 task명 존재시 대체)

//@TODO 카테고리가 같아도 사용모듈 및 파일종류마다 다른 옵션을 취해야됨.ㅋㅋㅋㅋㅋㅋㅋ
//@TODO 여러개의 파일종류를 한번에 지정 가능해야됨.(html, css ...)
//@TODO 공유되는 변수 (server변수)같은 경우에도 config로 전달.

import * as production from './production'
import * as development from './development'
import * as performance from './performance'

import pathInfo from './pathInfo'

import _ from 'lodash';

const env = 'development'

const result = {}

const priorities = {
  production  : ['production'],
  development : ['production', 'development'],
  performance : ['production', 'performance']
}

const configs = {
  production,
  development,
  performance
}

const priority = priorities[env]

priority.forEach((configKey) => {
  let config = configs[configKey]
  let r = result

  [0, 0, 1].forEach((val) => {
    _.keys(config).forEach((key) => {
      config = config[key]

      if(val === 1){
        if(r[key] === undefined){
          r[key] = config
        }else{
          Object.assign(r[key], config)
        }
      }else{
        r = r[key] = initObject(r[key])
      }
    })
  })
}

priority.forEach((configKey) => {
  let categories = configs[configKey]

  _.keys(categories).forEach((category) => {
    let moduleNames = categories[category]
    let resultModules = result[category] = initObject(result[category])

    _.keys(moduleNames).forEach((moduleName) => {
      let filetypes = moduleNames[moduleName]
      let resultFiletypes = resultModules[moduleName] = initObject(resultModules[moduleName])

      _.keys(filetypes).forEach((filetype) => {
        let config = filetypes[filetype]

        if(resultFiletypes[filetype] === undefined){
          resultFiletypes[filetype] = config
        }else{
          Object.assign(resultFiletypes[filetype], config)
        }
      })
    })
  })
})

function initObject(origin){
  if(Object.isObject(origin)){
    return origin
  }
  return {}
}

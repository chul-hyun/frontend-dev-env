export default {

}
let tasks = {}

tasks.server = {
  browserSync: {
    all:{
      codeSync  : true,
      open      : false,
      ghostMode : {
        clicks : true,
        forms  : true,
        scroll : true
      },
      reloadOnRestart : true,
      reloadDebounce  : 1000
    }
  }
}

function taskDefine({ series, parallel, task }){
  //performance -> development -> production 순으로 taskDefine이 실행 됨.
  //즉, 정의된 task도 extend 되게.
}

export default {
  tasks,
  taskDefine
}

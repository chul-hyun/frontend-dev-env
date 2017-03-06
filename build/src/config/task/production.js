const config = {
  clean: {
    del: {
      fileType: ['html', 'script', 'css'],
      config: { }
    }
  }
}

function taskDefine({ series, parallel, task }){
  //performance -> development -> production 순으로 taskDefine이 실행 됨.
  //즉, 정의된 task도 extend 되게.
}

export default {
  config,
  taskDefine
}

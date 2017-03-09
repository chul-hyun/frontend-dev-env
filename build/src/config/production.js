export const clean = {
  del: {
    all: {}
  }
}

export const compress = {
  gz: {
    code: {}
  }
}

export const etc = {
  watch: {
    all: {
      srcTask: [],
      onSrcChange: ()=>{},
      destTask: [],
      onDestChange: ()=>{}
    }
  }
}

export const lint = {
  eslint: {
    script:{}
  },
  html5lint: {
    html:{}
  },
  lesshint: {
    style:{}
  }
}

export const min = {
  uglify: {
    script: {}
  },
  htmlmin: {
    html:{
      caseSensitive               : true,
      collapseBooleanAttributes   : true,
      collapseInlineTagWhitespace : true,
      collapseWhitespace          : true,
      conservativeCollapse        : true
    }
  },
  csssnano: {
    style:{}
  }
}

export const server = {
  browserSync: {
    all:{
      ui: false,
      port: 80,
      codeSync: false,
      open: false,
      ghostMode: {
        clicks: false,
        forms: false,
        scroll: false
      },
      reloadOnRestart: false,
      reloadDebounce: 0
    }
  }
}

export const trans = {
  babelify: {
    script:{
      browserify : {
        debug : false
      }
    }
  },
  copy: {
    html: {

    }
  },
  less: {
    style:{

    }
  }
}

export function taskDefine({ series, parallel, task }){
  //performance -> development -> production 순으로 taskDefine이 실행 됨.
  //즉, 정의된 task도 extend 되게.
}

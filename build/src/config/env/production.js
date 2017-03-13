import bs from '../val/bs';
import gzipStatic from 'connect-gzip-static'
import pathInfo from '../pathInfo';

let tasks = {}

tasks.clean = {
  del: {
    all: {}
  }
}

tasks.compress = {
  gz: {
    code: {}
  }
}

tasks.etc = {
  watch: {
    all: {
      srcTask: [],
      onSrcChange: notifyChangeFile,
      destTask: [],
      onDestChange: reload
    }
  }
}

function notifyChangeFile(event){
  bs.notify('File ' + path.basename(event.path) + ' was ' + event.type);
}

function reload(event){
  bs.reload(event.path)
}

tasks.lint = {
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

tasks.min = {
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

let baseDir = pathInfo.html.dir

tasks.server = {
  browserSync: {
    all:{
      server: {
        baseDir
      },
      callbacks: {
        ready: (err, bs) => {
          bs.addMiddleware("*", gzipStatic(baseDir), {
            override: true
          });
        }
      },
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

tasks.trans = {
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

function taskDefine({ series, parallel, task }){
  //performance -> development -> production 순으로 taskDefine이 실행 됨.
  //즉, 정의된 task도 extend 되게.
}

export default {
  tasks,
  taskDefine
}
